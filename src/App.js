import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MenusPage from './components/Menu';
import PhotoGalleryPage from './components/PhotoGallery';
import ImagePage from './components/ImagePage';
import ContactForm from './components/ContactForm/Contact';
import About from './components/About';
import ScrollToTopButton from './components/BackToTop';
import { Cursor } from './components/Cursor';

import "./App.css"

const App = () => {
  useEffect(() => {
    const showRotationInstructions = () => {
      if (window.screen && window.screen.orientation && window.screen.orientation.type) {
        const orientationType = window.screen.orientation.type;
        if (orientationType !== 'portrait-primary' && orientationType !== 'landscape-primary') {
          alert("Veuillez verrouiller la rotation de votre appareil en mode portrait pour une meilleure expérience.");
        }
      }
    };

    showRotationInstructions(); // Afficher les instructions au chargement du composant
  }, []);

  return (
    <Router>
      <Cursor />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/menus" element={<MenusPage />} />
        <Route path="/photo-gallery" element={<PhotoGalleryPage />} />
        <Route path="/image/:id" element={<ImagePage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <ScrollToTopButton pcScrollOffset={1600} mobileScrollOffset={1200} />
    </Router>
  );
};

export default App;
