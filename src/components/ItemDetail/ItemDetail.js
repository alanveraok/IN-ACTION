import React from "react";
import "./ItemDetail.css";

import ItemCount from "../ItemCount/ItemCount";


function ItemDetail({ data }) {
  return (
    <>
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
          <ItemCount initial={1} stock={10} />
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
