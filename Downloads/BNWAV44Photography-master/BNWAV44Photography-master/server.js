const express = require('express');
const path = require('path');
const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');
const App = require('./src/App').default;

const PORT = process.env.PORT || 3000;
const app = express();

// Servir les fichiers statiques avec mise en cache
app.use(express.static(path.resolve(__dirname, 'build'), {
  maxAge: '30d',
}));

// Mettre en cache le fichier index.html
let indexHTML;
fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading index.html:', err);
    process.exit(1);
  }
  indexHTML = data;
});

app.get('/*', (req, res) => {
  console.log(`Received request for: ${req.url}`);
  const context = {};
  
  try {
    const appMarkup = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );
    console.log(`Rendered app markup for: ${req.url}`);

    if (context.url) {
      console.log(`Redirecting to: ${context.url}`);
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      console.log(`404 Not Found for: ${req.url}`);
      res.status(404);
    }

    const html = indexHTML.replace(
      '<div id="root"></div>',
      `<div id="root">${appMarkup}</div>`
    );

    res.send(html);
  } catch (error) {
    console.error(`Error rendering app for ${req.url}:`, error);
    res.status(500).send('An internal server error occurred');
  }
});

// Gestion d'erreur globale
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('An internal server error occurred');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});