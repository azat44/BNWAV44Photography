import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import Header from './components/Header';
import ScrollToTopButton from './components/BackToTop';
import { Cursor } from './components/Cursor';
import "./App.css";

const MenusPage = lazy(() => import('./components/Menu'));
const PhotoGalleryPage = lazy(() => import('./components/PhotoGallery'));
const ImagePage = lazy(() => import('./components/ImagePage'));
const ContactForm = lazy(() => import('./components/ContactForm/Contact'));
const About = lazy(() => import('./components/About'));

const App = ({ location, context }) => {
  // ... (votre code useEffect reste inchangé)

  const isSSR = typeof window === 'undefined';

  const AppRoutes = () => (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/menus" element={<MenusPage />} />
        <Route path="/photo-gallery" element={<PhotoGalleryPage />} />
        <Route path="/image/:id" element={<ImagePage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Suspense>
  );

  return (
    <div>
      {isSSR ? (
        <StaticRouter location={location} context={context}>
          <AppRoutes />
        </StaticRouter>
      ) : (
        <BrowserRouter>
          <Cursor />
          <AppRoutes />
          <ScrollToTopButton pcScrollOffset={1600} mobileScrollOffset={1100} />
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;

export const routes = [
  { path: '/' },
  { path: '/menus' },
  { path: '/photo-gallery' },
  { path: '/image/:id' },
  { path: '/contact' },
  { path: '/about' }
];