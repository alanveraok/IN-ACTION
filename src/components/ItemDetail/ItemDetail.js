import React, { useState } from "react";
import "./ItemDetail.css";

import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ data }) {
  const [countItem, setCountItem] = useState(0);

  function handleAdd(counter) {
    setCountItem(counter);
  }

  return (
    <div className="card">
      <div className="card-img">
        <img src={data.img} alt="imagen" />
      </div>
      <div className="details">
        <h2>{data.title}</h2>
        <h3>$ {data.price}</h3>
        <p>STOCK: {data.stock}</p>
        <p>{data.description}</p>
        <p>PESO: {data.weight}</p>
        <p>ALTURA: {data.size}</p>

        {countItem === 0 ? (
          <ItemCount
            initial={1}
            stock={10}
            onAdd={(counter) => handleAdd(counter)}
          />
        ) : (
          <a href="/cart">Ir a carrito</a>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
