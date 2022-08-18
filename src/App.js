import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// import { Button } from "bootstrap";
import NavBar from "./components/NavBar/NavBar";

import Banner from "./components/Banner/Banner";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <NavBar />
          <Banner />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detalle/:id" element={<ItemDetailContainer/>} />
            <Route
              path="/category/:idCategory"
              element={<ItemListContainer />}
            />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}
export default App;
