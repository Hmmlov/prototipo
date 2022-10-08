import "./App.css";
import Inicio from "./Views/Inicio";
import Menu from "./Components/Menu";

function App() {
  return (
    <>
      <Menu contenido={<Inicio/>}/>
    </>
  );
}

export default App;
