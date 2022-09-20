import React, { useState } from "react";
import "./ItemDetail.css";

import ItemCount from "../ItemCount/ItemCount";

import { useContext } from "react";

import { cartContext } from "../../store/cartContext";

import { Link } from "react-router-dom";

function ItemDetail({ data }) {
  const { addToCart, removeItem, clearCart } = useContext(cartContext);
  const [countItem, setCountItem] = useState(0);

  function handleAdd(counter) {
    addToCart(data, counter);
    setCountItem(counter);
  }

  function removeItemCart(data) {
    removeItem(data);
  }

  function clearItemCart() {
    clearCart();
  }

  return (
    <div className="card-detail-container">
      <div className="card-img">
        <img src={data.img} alt="imagen" />
      </div>
      <div className="details">
        <h2 className="title-detail">{data.title}</h2>
        <h3 className="title-price">$ {data.price}</h3>
        <p className="title-stock"> STOCK: {data.stock} </p>
        <p className="title-weight">PESO: {data.weight}</p>
        <p className="title-height">ALTURA: {data.size}</p>
        <p className="descript">{data.description}</p>
      </div>

      <div className="detail-buttons">
        {data.stock && (
          <ItemCount
            initial={1}
            stock={10}
            onAdd={(counter) => handleAdd(counter)}
          />
        )}
        {countItem > 0 && (
          <div className="cart-buttons">
            <button className="btn-primary" onClick={removeItemCart}>
              ELIMINAR CARRITO
            </button>
            <button className="btn-primary" onClick={clearItemCart}>
              ELIMINAR TODO
            </button>

            <Link to="/Cart">
              <button className="btn-primary">IR AL CARRITO</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
