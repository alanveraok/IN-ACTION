import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// import { Button } from "bootstrap";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import ClickCount from "./components/ClickCount/ClickCount";
import ClickCount from "./components/ItemCount/ItemCount";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  const titles = {
    textAlign: "center",
    marginBottom: "50px",
    fontSize: "60px",
  };

  return (
    <div className="App">
      <NavBar />

      <main>
        <div className="banner">
          <h1 style={titles}>
            {" "}
            <span className="span-in">IN- </span>ACTION
          </h1>
          <h2>FIGURAS DE ACCIÓN Y COLLECIONABLES</h2>
        </div>

        <div>
          {/* <ItemListContainer /> */}
          <ItemDetailContainer/>
        </div>
      </main>
    </div>
  );
}

export default App;
