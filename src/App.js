import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "bootstrap";
import NavBar from "./components/NavBar";

function App() {
  const titles = {
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "50px",
    fontSize: "60px",
  };

  return (
    <body>
      <nav>
        <NavBar />
      </nav>
      <div className="banner">
        <h1 style={titles}>HOPFEN CRAFT BEER</h1>
      </div>

      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status"></div>
      </div>
    </body>
  );
}

export default App;
