import React from "react";
import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";

import { Link } from "react-router-dom";

function Item({ title, price, img, stock, id }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="imagen" />
      </div>
      <div className="details">
        <h2>{title}</h2>
        <h3>$ {price}</h3>
        <p>STOCK: {stock}</p>
        <Link className="verMas" to={`/detalle/${id}`}> Ver más</Link>
        <ItemCount initial={1} stock={10} />
      </div>
    </div>
  );
}

export default Item;
