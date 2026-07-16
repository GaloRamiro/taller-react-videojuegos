import TablaVideojuegos from "../components/TablaVideojuegos";

function Videojuegos({ videojuegos, onEliminar }) {
  return (
    <TablaVideojuegos
      videojuegos={videojuegos}
      onEliminar={onEliminar}
    />
  );
}

export default Videojuegos;