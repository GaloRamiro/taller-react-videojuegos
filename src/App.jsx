import TablaVideojuegos from "./components/TablaVideojuegos";
import data from "./data/videojuegos";

function App() {
  return <TablaVideojuegos videojuegos={data} />;
}

export default App;