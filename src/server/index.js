import express from 'express';
import proxy from 'http-proxy-middleware';
import { matchRoutes } from 'react-router-config';
import getStore from '../store';
import routes from '../routes';
import { render } from './utils';

const app = express();
app.use(express.static('public'));
app.use('/api', proxy({
  target: 'http://47.95.113.63',
  changeOrigin: true,
  pathRewrite: {
    '^/' : '/ssr/',
  },
}))

app.get('*', (req, res) => {
  // 设置server环境变量
  process.env.COOKIE = req.get('cookie');

  const store = getStore();

  const matchedRoutes = matchRoutes(routes, req.path);

  const promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve).catch(resolve);
      });
      promises.push(promise);
    }
  });

  Promise.all(promises).then(() => {
    const context = {
      css: []
    };
    const html = render(req, store, routes, context);

    if (context.action === 'REPLACE') {
      return res.redirect(302, context.url);
    }

    if (context.NOT_FOUND) {
      res.status(404);
      res.send(html);
    } else {
      res.send(html);
    }
  });
});

app.listen(3000);
