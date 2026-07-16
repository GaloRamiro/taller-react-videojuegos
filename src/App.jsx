import { useState } from "react";
import videojuegosData from "./data/videojuegos";
import Videojuegos from "./pages/Videojuegos";
import FormularioVideojuego from "./pages/FormularioVideojuego";
import PaginaNoEncontrada from "./pages/PaginaNoEncontrada";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [videojuegos, setVideojuegos] = useState(videojuegosData);

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

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Videojuegos videojuegos={videojuegos} />} />

        <Route
          path="/nuevo"
          element={<FormularioVideojuego onGuardar={agregarVideojuego} />}
        />

        <Route path="*" element={<PaginaNoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
