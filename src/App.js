import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// import { Button } from "bootstrap";
import NavBar from "./components/NavBar/NavBar";

import Banner from "./components/Banner/Banner";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const titles = {
    textAlign: "center",
    marginBottom: "50px",
    fontSize: "60px",
  };

  return (
    <div className="App">

      <main> 
            <BrowserRouter>           
      <NavBar />
      <Banner/>      
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/detalle/:id" element={<ItemListContainer />} />
              <Route
                path="/category/:idCategory" element={<ItemDetailContainer />}
              />
            </Routes>
          </BrowserRouter>
        
      </main>
    </div>
  );
}
export default App;
