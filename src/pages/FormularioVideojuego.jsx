import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./FormularioVideojuego.css";
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
      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
            ? Number(value)
            : value,
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
    <div className="formulario-container">
      <h1>{videojuegoEditar ? "Editar Videojuego" : "Registrar Videojuego"}</h1>

      <form className="formulario" onSubmit={handleSubmit}>
        <div>
          <label>Título</label>
          <input
            type="text"
            name="titulo"
            placeholder="Ingrese el título del videojuego"
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
            <option value="">Seleccione un género</option>
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
            placeholder="Ej. PC, PS5, Xbox, Nintendo Switch"
            value={videojuego.plataforma}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Fecha de lanzamiento</label>
          <input
            type="date"
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
            placeholder="0.00"
            value={videojuego.precio}
            onChange={handleChange}
          />
        </div>

        <div className="checkbox">
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
