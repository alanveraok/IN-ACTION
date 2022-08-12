import React, { useEffect, useState } from "react";
import dataItems from "../Data/Data";
import ItemDetail from "../ItemDetail/ItemDetail";

function getOneItem() {
  return new Promise((resolve) => {
    setTimeout(() => {resolve(dataItems)}, 2500);
  });
}

function ItemDetailContainer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getOneItem().then((product) => {setData(product[0])
    });
  }, []);
  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
}

export default ItemDetailContainer;
