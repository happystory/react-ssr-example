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
  const store = getStore();

  const matchedRoutes = matchRoutes(routes, req.path);

  const promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  });

  Promise.all(promises).then(() => {
    res.send(render(req, store, routes));
  });
});

app.listen(3000);
