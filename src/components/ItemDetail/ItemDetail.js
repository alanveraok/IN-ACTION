import React, { useState } from "react";
import "./ItemDetail.css";

import ItemCount from "../ItemCount/ItemCount";

import { useContext } from "react";

import { cartContext } from "../store/cartContext";

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
    <div className="card">
      <div className="card-img">
        <img src={data.img} alt="imagen" />
      </div>
      <div className="details">
        <h2>{data.title}</h2>
        <h3>$ {data.price}</h3>
        <p className="description">{data.description}</p>
        <p>STOCK: {data.stock}</p>
        <p>PESO: {data.weight}</p>
        <p>ALTURA: {data.size}</p>

        {countItem === 0 ? (
          <ItemCount
            initial={1}
            stock={10}
            onAdd={(counter) => handleAdd(counter)}
          />
        ) : (
          <>
            <ItemCount
              initial={1}
              stock={10}
              onAdd={(counter) => handleAdd(counter)}
            />
            <button className="btn-primary" onClick={removeItemCart}>
              Eliminar carrito
            </button>
            <button className="btn-primary" onClick={clearItemCart}>
              Eliminar todo
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
