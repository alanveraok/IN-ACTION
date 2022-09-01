import React, { useEffect, useState } from "react";
import dataItems from "../Data/Data";

import ItemDetail from "../ItemDetail/ItemDetail";

import { useParams } from "react-router-dom";

import firestoreDB from "../../services/firebase";

import { collection, doc, getDoc } from "firebase/firestore";

// function getOneItem(SingleProductId) {
//   return new Promise((resolve) => {
//     let itemRequested = dataItems.find((element) => element.id === idURL);
//     setTimeout(() => {
//       resolve(itemRequested);
//     }, 2500);
//   });
// }

function ItemDetailContainer() {
  const [data, setData] = useState({});
  const idURL = useParams().id;
  useEffect(() => {
    function getOneItem(id) {
      return new Promise((resolve) => {
        const figurasCollection = collection(firestoreDB, "figuras");
        const docRef = doc(figurasCollection, id);
        getDoc(docRef).then((snapshot) => {
          resolve({ ...snapshot.data(), id: snapshot.id });
        });
      });
    }

    getOneItem(idURL).then((product) => {
      setData(product);
    });
  }, [idURL]);

  return (
    <>
      <ItemDetail data={data} />
    </>
  );
}

export default ItemDetailContainer;
