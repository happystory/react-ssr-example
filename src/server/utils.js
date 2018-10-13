import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

export const render = (req, store, routes) => {
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Switch>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </Switch>
      </StaticRouter>
    </Provider>
  ));

  const livereloadTpl = `<script>
    document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35728/livereload.js?snipver=1"></' + 'script>')
    </script>`;

  return (`
      <html>
        <head>
          <title>react ssr</title>
        </head>
        <body>
          <div id="root">${content}</div>
          <script>
            window.context = {
              state: ${JSON.stringify(store.getState())}
            }
          </script>
          <script src="./index.js"></script>
          ${process.env.NODE_ENV === 'development' ? livereloadTpl : ''}
        </body>
      </html>
    `);
}
