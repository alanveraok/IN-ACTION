import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// import { Button } from "bootstrap";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";




function App() {
  const titles = {
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "50px",
    fontSize: "60px",
  };

  return (
     
    <div className="App">
    <NavBar />

        <main>    

      <div className="banner">
        <h1 style={titles}>HOPFEN CRAFT BEER</h1>
      </div>

      <div>
      <ItemListContainer />
      </div>
      </main>
</div>
   
 
  );
}

export default App;
