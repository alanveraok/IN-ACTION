import React, { useEffect, useState } from "react";
import dataItems from "../Data/Data";

import ItemDetail from "../ItemDetail/ItemDetail";

import { useParams } from "react-router-dom";

// function getOneItem(SingleProductId) {
//   return new Promise((resolve) => {
//     let itemRequested = dataItems.find((element) => element.id === idURL);
//     setTimeout(() => {
//       resolve(itemRequested);
//     }, 2500);
//   });
// }

function ItemDetailContainer(SingleProductId) {
  const [data, setData] = useState({});
  const idURL = useParams().id;
  function getOneItem(SingleProductId) {
    return new Promise((resolve) => {
      let itemRequested = dataItems.find(
        (element) => element.id === Number(idURL)
      );
      setTimeout(() => {
        resolve(itemRequested);
      }, 2500);
    });
  }
  useEffect(() => {
    getOneItem().then((product) => {
      setData(product);
    });
  }, []);

  return(

  <>
    <ItemDetail data={data} />
  </>
  )
}

export default ItemDetailContainer;
