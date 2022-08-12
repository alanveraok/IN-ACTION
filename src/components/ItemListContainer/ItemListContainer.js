import "./ItemListContainer.css";
import ClickCount from "../ItemCount/ItemCount";
import ItemCount from "../ItemCount/ItemCount";
import React, { useEffect, useState } from "react";
import dataItems from "../Data/Data";
import ItemList from "../ItemList/ItemList";

function getProductos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dataItems), 1500);
  });
}

function ItemListContainer({ greeting = "NUESTROS PRODUCTOS" }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProductos().then((respuesta) => setData(respuesta));
  }, []);

  return (
    <div className="container">
      <h2>{greeting}</h2>
      <div>
        <div className="cards-container">
          <ItemList data={data} />
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
