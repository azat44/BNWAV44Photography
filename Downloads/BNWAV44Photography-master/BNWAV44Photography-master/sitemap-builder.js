require('./babelSetup');
const router = require('./src/App').routes;
const Sitemap = require('react-router-sitemap').default;

function generateSitemap() {
  try {
    const paramsConfig = {
      '/image/:id': [
        { id: '1' },
        { id: '2' },
        // Ajoutez d'autres IDs si nécessaire
      ],
    };

    const sitemap = new Sitemap(router)
      .applyParams(paramsConfig)
      .build('https://test.bnw-av.com')
      .save('./public/sitemap.xml');
    
    console.log('Sitemap generated successfully');
    console.log('Generated paths:', sitemap.paths);
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();