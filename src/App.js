import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import MenusPage from './components/Menu';
import PhotoGalleryPage from './components/PhotoGallery';
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
      </Routes>
    </Router>
  );
};

export default App;
