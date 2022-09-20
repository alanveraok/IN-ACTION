import React, { useEffect, useState } from "react";


import ItemDetail from "../ItemDetail/ItemDetail";

import { useParams } from "react-router-dom";

import {  doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer() {
  const [data, setData] = useState({});
  const idURL = useParams().id;

  useEffect(() => {
    const queryDB = getFirestore();
    const queryDoc = doc(queryDB, "figuras", idURL);
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, [idURL]);

  return (
    <>
      <ItemDetail data={data} />
    </>
  );
}

export default ItemDetailContainer;
