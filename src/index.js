import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './containers/Home';

const app = express();
app.use(express.static('public'));

const content = renderToString(<Home />);
const livereloadTpl = `<script>
document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
':35728/livereload.js?snipver=1"></' + 'script>')
</script>`;

app.get('/', (req, res) => {
  res.send(`
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
  `);
});

app.listen(3000);
