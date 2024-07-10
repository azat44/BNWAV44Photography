require('./babelSetup');

const path = require('path');
const express = require('express');
const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const favicon = require('serve-favicon');
const App = require('./src/App').default;

const app = express();

// Serve the favicon
app.use(favicon(path.join(__dirname, 'public', '@bnw_av44_Black and white photography favicon copy.ico')));

// Serve static files from the build directory
app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', (req, res) => {
  const context = {};
  const appString = ReactDOMServer.renderToString(
    React.createElement(App, { location: req.url, context })
  );

  const indexFile = path.resolve(__dirname, 'build', 'index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${appString}</div>`)
    );
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
