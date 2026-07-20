import { useState, useEffect } from "react";
import videojuegosData from "./data/videojuegos";
import Videojuegos from "./pages/Videojuegos";
import FormularioVideojuego from "./pages/FormularioVideojuego";
import PaginaNoEncontrada from "./pages/PaginaNoEncontrada";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [videojuegos, setVideojuegos] = useState(() => {
    const datosGuardados = localStorage.getItem("lista_videojuegos");

    return datosGuardados ? JSON.parse(datosGuardados) : videojuegosData;
  });
  useEffect(() => {
    localStorage.setItem("lista_videojuegos", JSON.stringify(videojuegos));
  }, [videojuegos]);

  function agregarVideojuego(nuevoVideojuego) {
    setVideojuegos([
      ...videojuegos,
      {
        ...nuevoVideojuego,
        id: videojuegos.length + 1,
        progreso: 0,
      },
    ]);
  }
  function eliminarVideojuego(id) {
    const filtrados = videojuegos.filter((videojuego) => videojuego.id !== id);

    setVideojuegos(filtrados);
  }
  function editarVideojuego(videojuegoEditado) {
    const actualizados = videojuegos.map((videojuego) => {
      if (videojuego.id === videojuegoEditado.id) {
        return videojuegoEditado;
      } else {
        return videojuego;
      }
    });

    setVideojuegos(actualizados);
  }
  function manejarGuardar(videojuego) {
    const existe = videojuegos.find((v) => v.id === videojuego.id);

    if (existe) {
      editarVideojuego(videojuego);
    } else {
      agregarVideojuego(videojuego);
    }
  }
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Videojuegos
              videojuegos={videojuegos}
              onEliminar={eliminarVideojuego}
            />
          }
        />
        <Route
          path="/nuevo"
          element={<FormularioVideojuego onGuardar={manejarGuardar} />}
        />

        <Route
          path="/editar"
          element={<FormularioVideojuego onGuardar={manejarGuardar} />}
        />
        <Route path="*" element={<PaginaNoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
