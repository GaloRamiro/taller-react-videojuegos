import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Tienda de Videojuegos</h2>

      <div className="menu">
        <Link to="/">Inicio</Link>
        <Link to="/nuevo">Nuevo Videojuego</Link>
      </div>
    </nav>
  );
}

export default Navbar;