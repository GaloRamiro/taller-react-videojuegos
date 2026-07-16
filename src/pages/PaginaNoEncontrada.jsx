import { Link } from "react-router-dom";

function PaginaNoEncontrada() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>La página que intentas visitar no existe.</p>

      <Link to="/">
        <button>Volver al inicio</button>
      </Link>
    </div>
  );
}

export default PaginaNoEncontrada;