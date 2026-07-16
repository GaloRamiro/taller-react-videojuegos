import "./TablaVideojuegos.css";
import { Link } from "react-router-dom";
function TablaVideojuegos({ videojuegos, onEliminar }) {
  return (
    <div className="videojuegos-container">
      <div className="videojuegos-header">
        <div>
          <h2>Lista de Videojuegos</h2>
          <p>{videojuegos.length} registros</p>
        </div>
      </div>

      <div className="tabla-responsive">
        <table className="tabla-videojuegos">
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Género</th>
              <th>Plataforma</th>
              <th>Lanzamiento</th>
              <th>Precio</th>
              <th>Disponible</th>
              <th>Progreso</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {videojuegos.map((videojuego) => (
              <tr key={videojuego.id}>
                <td>{videojuego.titulo}</td>
                <td>{videojuego.genero}</td>
                <td>{videojuego.plataforma}</td>
                <td>{videojuego.lanzamiento}</td>
                <td>${Number(videojuego.precio).toFixed(2)}</td>

                <td>
                  <span
                    className={
                      videojuego.disponible
                        ? "estado disponible"
                        : "estado no-disponible"
                    }
                  >
                    {videojuego.disponible ? "Sí" : "No"}
                  </span>
                </td>

                <td>
                  <progress value={videojuego.progreso} max="1"></progress>
                  <span> {(videojuego.progreso * 100).toFixed(0)}%</span>
                </td>
                <td>
                  <Link to="/editar" state={videojuego}>
                    Editar
                  </Link>

                  <button onClick={() => onEliminar(videojuego.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablaVideojuegos;
