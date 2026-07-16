import { useState } from "react";

function FormularioVideojuego() {
  const [videojuego, setVideojuego] = useState({
    titulo: "",
    genero: "",
    plataforma: "",
    lanzamiento: "",
    precio: "",
    disponible: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setVideojuego({
      ...videojuego,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  return (
    <div>
      <h1>Formulario de Videojuego</h1>

      <form>
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
          <label>Precio</label>
          <input
            type="number"
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

        <button type="submit">
          Guardar Videojuego
        </button>
      </form>
    </div>
  );
}

export default FormularioVideojuego;