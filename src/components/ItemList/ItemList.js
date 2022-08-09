import React from "react";
import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";

function ItemList({ data }) {
  return data.map((singleProduct) => {
    return (
      <Item
        key={singleProduct.id}
        title={singleProduct.title}
        img={singleProduct.img}
        price={singleProduct.price}
        stock={singleProduct.stock}      

      />
     
    );
  });
}

export default ItemList;
