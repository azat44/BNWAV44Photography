// server.babel.js
require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react']
  });
  
  // Now we can require our main server file
  require('./server');
  