import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../Routes';

export const render = (req) => {
  const content = renderToString((
    <StaticRouter location={req.path} context={{}}>
      { Routes }
    </StaticRouter>
  ));

  const livereloadTpl = `<script>
  document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
  ':35728/livereload.js?snipver=1"></' + 'script>')
  </script>`;

  return `
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="./index.js"></script>
        ${process.env.NODE_ENV === 'development' ? livereloadTpl : ''}
      </body>
    </html>
  `;
}
