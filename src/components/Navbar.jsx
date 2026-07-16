import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Tienda de Videojuegos
      </Link>

      <div className="menu">
        <Link to="/">Inicio</Link>
        <Link to="/nuevo">Nuevo Videojuego</Link>
      </div>
    </nav>
  );
}

export default Navbar;