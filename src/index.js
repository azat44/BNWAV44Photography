// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Fonction pour bloquer l'orientation en mode portrait
const lockOrientation = () => {
  if (window.orientation !== 0) { // Vérifie si l'orientation n'est pas en mode portrait
    setTimeout(() => {
      window.screen.orientation.lock("portrait-primary").catch((error) => {
        console.error("Impossible de bloquer l'orientation en mode portrait:", error);
      });
    }, 0);
  }
};

// Bloquer l'orientation au chargement de la page
lockOrientation();

// Écouter l'événement de changement d'orientation et bloquer l'orientation en mode portrait
window.addEventListener('orientationchange', lockOrientation);

// Verrouiller la taille de la fenêtre pour empêcher le défilement horizontal
document.body.style.overflowX = 'hidden';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
