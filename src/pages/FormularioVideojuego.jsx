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
      descripcion: "",
      calificacion: "",
      disponible: false,
    },
  );
  const [errores, setErrores] = useState({});
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
    const erroresActivos = validarFormulario();

    if (Object.keys(erroresActivos).length > 0) {
      setErrores(erroresActivos);
      return;
    }

    setErrores({});
    onGuardar(videojuego);

    navigate("/");

    setVideojuego({
      titulo: "",
      genero: "",
      plataforma: "",
      lanzamiento: "",
      precio: "",
      descripcion: "",
      calificacion: "",
      disponible: false,
    });
  }
  function validarFormulario() {
    const erroresActivos = {};

    // Título
    if (videojuego.titulo.trim() === "") {
      erroresActivos.titulo = "Ingrese un título.";
    }

    // Género
    if (videojuego.genero === "") {
      erroresActivos.genero = "Seleccione un género.";
    }

    // Plataforma
    if (videojuego.plataforma.trim() === "") {
      erroresActivos.plataforma = "Ingrese una plataforma.";
    }

    // Precio
    if (Number(videojuego.precio) <= 0) {
      erroresActivos.precio = "Ingrese un precio válido.";
    }

    // Fecha
    const hoy = new Date().toISOString().split("T")[0];

    if (videojuego.lanzamiento === "") {
      erroresActivos.lanzamiento = "Seleccione una fecha.";
    } else if (videojuego.lanzamiento > hoy) {
      erroresActivos.lanzamiento = "La fecha no puede ser futura.";
    }

    // Descripción
    if (videojuego.descripcion.trim().length < 10) {
      erroresActivos.descripcion =
        "La descripción debe tener al menos 10 caracteres.";
    } else if (videojuego.descripcion.length > 250) {
      erroresActivos.descripcion = "Máximo 250 caracteres.";
    }

    // Calificación
    if (
      Number(videojuego.calificacion) < 1 ||
      Number(videojuego.calificacion) > 100
    ) {
      erroresActivos.calificacion = "Debe estar entre 1 y 100.";
    }

    return erroresActivos;
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
          {errores.titulo && (
            <span className="error-mensaje">{errores.titulo}</span>
          )}
        </div>

        <div>
          <label>Género</label>
          <select
            name="genero"
            value={videojuego.genero}
            onChange={handleChange}
          >
            <option value="">Seleccione un género</option>
            <option value="Acción">Acción</option>
            <option value="RPG">RPG</option>
            <option value="Aventura">Aventura</option>
            <option value="Deportes">Deportes</option>
          </select>
          {errores.genero && (
            <span className="error-mensaje">{errores.genero}</span>
          )}
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
          {errores.plataforma && (
            <span className="error-mensaje">{errores.plataforma}</span>
          )}
        </div>

        <div>
          <label>Fecha de lanzamiento</label>
          <input
            type="date"
            name="lanzamiento"
            value={videojuego.lanzamiento}
            onChange={handleChange}
          />
          {errores.lanzamiento && (
            <span className="error-mensaje">{errores.lanzamiento}</span>
          )}
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
          {errores.precio && (
            <span className="error-mensaje">{errores.precio}</span>
          )}
        </div>
        <div>
          <label>Sinopsis / Descripción</label>

          <textarea
            name="descripcion"
            placeholder="Escriba una breve descripción"
            value={videojuego.descripcion}
            onChange={handleChange}
            rows="4"
          ></textarea>

          {errores.descripcion && (
            <span className="error-mensaje">{errores.descripcion}</span>
          )}
        </div>

        <div>
          <label>Calificación de la crítica</label>

          <input
            type="number"
            name="calificacion"
            min="1"
            max="100"
            value={videojuego.calificacion}
            onChange={handleChange}
          />

          {errores.calificacion && (
            <span className="error-mensaje">{errores.calificacion}</span>
          )}
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
