import "./ItemListContainer.css";
import ClickCount from "../ItemCount/ItemCount";
import ItemCount from "../ItemCount/ItemCount";
import React, { useEffect, useState } from "react";
import dataItems from "../Data/Data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Ring } from "@uiball/loaders";

function getProductos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dataItems), 1500);
  });
}

function ItemListContainer({ greeting = "TODAS NUESTRAS FIGURAS DE ACCIÓN" }) {
  const [data, setData] = useState([]);
  const idCategory = useParams().idCategory;

  useEffect(() => {
    getProductos().then((respuesta) => {
      let itemsFilter = dataItems.filter(
        (element) => element.category === idCategory
      );
      if (idCategory === undefined) {
        setData(respuesta);
      } else {
        setData(itemsFilter);
      }
    });
  }, [idCategory]);

  if (data.length === 0) {
    return (
      <div className="container">
        <Ring size={90} speed={1.6} color="yellow"/>
      </div>
    );
  }

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
