import "./Videojuegos.css";
function TablaVideojuegos({ videojuegos }) {
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
            </tr>
          </thead>

          <tbody>
            {videojuegos.map((videojuego) => (
              <tr key={videojuego.id}>
                <td>{videojuego.titulo}</td>
                <td>{videojuego.genero}</td>
                <td>{videojuego.plataforma}</td>
                <td>{videojuego.lanzamiento}</td>
                <td>${videojuego.precio.toFixed(2)}</td>

                <td>
                  <span
                    className={
                      videojuego.disponible
                        ? "estado disponible"
                        : "estado no disponible"
                    }
                  >
                    {videojuego.disponible ? "Sí" : "No"}
                  </span>
                </td>

                <td>
                  <progress value={videojuego.progreso} max="1"></progress>
                  <span> {(videojuego.progreso * 100).toFixed(0)}%</span>
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
