import React, { useEffect, useState } from "react";
import dataItems from "../Data/Data";
import ItemDetail from "../ItemDetail/ItemDetail";

import { useParams } from "react-router-dom";

function getOneItem() {
  const idURL = useParams().id;
  return new Promise((resolve) => {
    let itemRequested = dataItems.find((element) => element.id === idURL);
    resolve(itemRequested);
    setTimeout(() => {
      resolve(dataItems[id]);
    }, 2500);
  });
}

function ItemDetailContainer() {
  const [data, setData] = useState({});
  useEffect(() => {
    getOneItem().then((product) => {
      setData(product[id]);
    });
  }, []);
  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
}

export default ItemDetailContainer;
