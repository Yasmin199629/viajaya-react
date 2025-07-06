
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinos from './pages/Destinos';
import Contacto from './pages/Contacto';
import About from './pages/About';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';

function App() {
  return (
    <Router basename="/viajaya-react"> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
