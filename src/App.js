import React from 'react';
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
      <ScrollToTopButton pcScrollOffset={1600} mobileScrollOffset={2200} />

    </Router>
  );
};

export default App;
