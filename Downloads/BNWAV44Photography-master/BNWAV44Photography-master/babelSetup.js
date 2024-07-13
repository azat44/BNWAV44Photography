require('ignore-styles').default(['.css', '.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg']);
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  ignore: [/(node_modules)/],
  extensions: ['.js', '.jsx'],
});

require('css-modules-require-hook')({
  extensions: ['.css'],
  generateScopedName: '[name]__[local]___[hash:base64:5]',
});
