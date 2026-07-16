import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function FormularioVideojuego({ onGuardar }) {
  const navigate = useNavigate();
  const location = useLocation();
  const videojuegoEditar = location.state;
  const [videojuego, setVideojuego] = useState(
    videojuegoEditar || {
      titulo: "",
      genero: "",
      plataforma: "",
      lanzamiento: "",
      precio: "",
      disponible: false,
    },
  );

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setVideojuego({
      ...videojuego,
      [name]: type === "checkbox" ? checked : value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();

    onGuardar(videojuego);

    navigate("/");

    setVideojuego({
      titulo: "",
      genero: "",
      plataforma: "",
      lanzamiento: "",
      precio: "",
      disponible: false,
    });
  }

  return (
    <div>
      <h1>{videojuegoEditar ? "Editar Videojuego" : "Registrar Videojuego"}</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Título</label>
          <input
            type="text"
            name="titulo"
            value={videojuego.titulo}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Género</label>
          <select
            name="genero"
            value={videojuego.genero}
            onChange={handleChange}
          >
            <option value="">Seleccione</option>
            <option value="Acción">Acción</option>
            <option value="RPG">RPG</option>
            <option value="Aventura">Aventura</option>
            <option value="Deportes">Deportes</option>
          </select>
        </div>

        <div>
          <label>Plataforma</label>
          <input
            type="text"
            name="plataforma"
            value={videojuego.plataforma}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Lanzamiento</label>
          <input
            type="number"
            name="lanzamiento"
            value={videojuego.lanzamiento}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Precio</label>
          <input
            type="number"
            step="0.01"
            name="precio"
            value={videojuego.precio}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="disponible"
              checked={videojuego.disponible}
              onChange={handleChange}
            />
            Disponible
          </label>
        </div>

        <button type="submit">Guardar Videojuego</button>
      </form>
    </div>
  );
}

export default FormularioVideojuego;
