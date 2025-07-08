import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        ViajaYa
      </Link>

    
      
        <li>
          
          <Link to="/" onClick={toggleMenu}>Inicio</Link>
        </li>
        <li>
          <Link to="/destinos" onClick={toggleMenu}>Destinos</Link>
        </li>
        <li>
          <Link to="/contacto" onClick={toggleMenu}>Contacto</Link>
        </li>
        <li>
          <Link to="/nosotros" onClick={toggleMenu}>Nosotros</Link>
        </li>
      

      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;



