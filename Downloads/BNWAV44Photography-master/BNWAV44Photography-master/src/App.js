import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import Header from './components/Header';
import MenusPage from './components/Menu';
import PhotoGalleryPage from './components/PhotoGallery';
import ImagePage from './components/ImagePage';
import ContactForm from './components/ContactForm/Contact';
import About from './components/About';
import ScrollToTopButton from './components/BackToTop';
import { Cursor } from './components/Cursor';
import "./App.css";

const App = ({ location, context }) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const disableRightClick = (e) => {
        e.preventDefault();
      };

      const disableF12 = (e) => {
        if (e.keyCode === 123) {
          e.preventDefault();
        }
      };

      document.addEventListener('contextmenu', disableRightClick);
      document.addEventListener('keydown', disableF12);

      return () => {
        document.removeEventListener('contextmenu', disableRightClick);
        document.removeEventListener('keydown', disableF12);
      };
    }
  }, []);

  const isSSR = typeof window === 'undefined';

  return (
    <div>
      {isSSR ? (
        <StaticRouter location={location} context={context}>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/menus" element={<MenusPage />} />
            <Route path="/photo-gallery" element={<PhotoGalleryPage />} />
            <Route path="/image/:id" element={<ImagePage />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </StaticRouter>
      ) : (
        <BrowserRouter>
          <Cursor />
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/menus" element={<MenusPage />} />
            <Route path="/photo-gallery" element={<PhotoGalleryPage />} />
            <Route path="/image/:id" element={<ImagePage />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <ScrollToTopButton pcScrollOffset={1600} mobileScrollOffset={1100} />
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
