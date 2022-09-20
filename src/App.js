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

import Form from "./components/Form/Form";

import Footer from "./components/Footer/Footer";



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
              <Route path="/Form" element={<Form />} />
            </Routes>
            <Footer/>             
          </CartProvider>
        </BrowserRouter>
      </main>
    </div>
  );
}
export default App;
