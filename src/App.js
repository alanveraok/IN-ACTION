import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// import { Button } from "bootstrap";
import NavBar from "./components/NavBar/NavBar";

import Banner from "./components/Banner/Banner";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./store/cartContext";

import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Banner />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/detalle/:id" element={<ItemDetailContainer />} />
              <Route
                path="/category/:idCategory"
                element={<ItemListContainer />}
              />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </main>
    </div>
  );
}
export default App;
