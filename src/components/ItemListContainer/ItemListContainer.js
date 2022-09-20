import "./ItemListContainer.css";

import React, { useEffect, useState } from "react";

import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";




import {
  collection,
  getDocs,
  query,
  where,
  getFirestore,
} from "firebase/firestore";

function ItemListContainer({ greeting = "TODAS NUESTRAS FIGURAS DE ACCIÓN" }) {
  const [data, setData] = useState([]);
  const idCategory = useParams().idCategory;

  useEffect(() => {
    const queryDB = getFirestore();
    const queryCollection = collection(queryDB, "figuras");
    if (idCategory) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", idCategory)
      );
      getDocs(queryFilter).then((res) =>
        setData(
          res.docs.map((product) => ({ ...product.data(), id: product.id }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((product) => ({ ...product.data(), id: product.id }))
        )
      );
    }
  }, [idCategory]);

if(data.length === 0){
  return(
    <div className="lds-dual-ring">
      
    </div>
  )
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
