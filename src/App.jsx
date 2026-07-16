import { useState } from "react";
import videojuegosData from "./data/videojuegos";
import Videojuegos from "./pages/Videojuegos";
import FormularioVideojuego from "./pages/FormularioVideojuego";
import PaginaNoEncontrada from "./pages/PaginaNoEncontrada";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [videojuegos] = useState(videojuegosData);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Videojuegos videojuegos={videojuegos} />} />

        <Route path="/nuevo" element={<FormularioVideojuego />} />

        <Route path="*" element={<PaginaNoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
