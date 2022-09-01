import "./ItemListContainer.css";
import ClickCount from "../ItemCount/ItemCount";
import ItemCount from "../ItemCount/ItemCount";
import React, { useEffect, useState } from "react";
import dataItems from "../Data/Data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Ring } from "@uiball/loaders";

import firestoreDB from "../../services/firebase";

import { collection, getDocs, query, where } from "firebase/firestore";

function ItemListContainer({ greeting = "TODAS NUESTRAS FIGURAS DE ACCIÓN" }) {
  const [data, setData] = useState([]);
  const idCategory = useParams().idCategory;

  function getProductos() {
    return new Promise((resolve) => {
      const figurasCollection = collection(firestoreDB, "figuras");
      getDocs(figurasCollection).then((snapshot) => {
        const docsData = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        resolve(docsData);
      });
    });
  }

  function getProductsCategory(idCategory) {
    return new Promise((resolve) => {
      const figurasCollectionRef = collection(firestoreDB, "figuras");
      const q = query(
        figurasCollectionRef,
        where("category", "==", idCategory)
      );
      getDocs(q).then((snapshot) => {
        const docsData = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        resolve(docsData);
      });
    });
  }

  useEffect(() => {
    if (getProductsCategory === undefined)
      getProductsCategory().then((resolve) => {
        setData(resolve);
      });
    else {
      getProductos().then((resolve) => {
        setData(resolve);
      });
    }
  }, [idCategory]);

  if (data.length === 0) {
    return (
      <div className="container">
        <Ring size={90} speed={1.6} color="yellow" />
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
