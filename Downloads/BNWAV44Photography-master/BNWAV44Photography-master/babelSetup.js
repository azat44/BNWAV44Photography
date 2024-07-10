require('@babel/register')({
    ignore: [/(node_modules)/, /\.css$/, /\.png$/, /\.jpg$/, /\.jpeg$/, /\.gif$/, /\.svg$/, /\.webp$/],
    presets: ['@babel/preset-env', '@babel/preset-react']
  });
  
  // Ignore CSS and image file imports
  require.extensions['.css'] = () => {};
  require.extensions['.png'] = () => {};
  require.extensions['.jpg'] = () => {};
  require.extensions['.jpeg'] = () => {};
  require.extensions['.gif'] = () => {};
  require.extensions['.svg'] = () => {};
  require.extensions['.webp'] = () => {};
  