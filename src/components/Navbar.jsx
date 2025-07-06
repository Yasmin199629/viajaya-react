

import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>ViajaYa</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/destinos">Destinos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;