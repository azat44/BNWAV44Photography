// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.addEventListener('orientationchange', function () {
  if (window.orientation !== 0) { // Vérifie si l'orientation n'est pas en mode portrait
    alert("Veuillez garder votre téléphone en mode portrait pour une meilleure expérience."); // Affiche un message d'alerte
    setTimeout(function () {
      window.screen.orientation.lock("portrait-primary").catch(function (error) {
        console.error("Impossible de bloquer l'orientation en mode portrait:", error);
      });
    }, 0);
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
