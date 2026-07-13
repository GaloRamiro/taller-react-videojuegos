import { useState } from "react";
import TablaVideojuegos from "./components/TablaVideojuegos";
import videojuegosData from "./data/videojuegos";

function App() {
  const [videojuegos] = useState(videojuegosData);

  return <TablaVideojuegos videojuegos={videojuegos} />;
}

export default App;