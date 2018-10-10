import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './containers/Home';

const app = express();
const content = renderToString(<Home />);

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        ${content}
        <script>
          document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
          ':35728/livereload.js?snipver=1"></' + 'script>')
        </script>
      </body>
    </html>
  `);
});

app.listen(3000);
