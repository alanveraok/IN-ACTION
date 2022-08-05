import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount(props) {
  console.log(props.stock, props.initial);
  const [counter, setCount] = React.useState(1);
  /*hacerlo con const en vez de let y no usar ++*/

  function handleIncrement() {
    if (counter >= 1 && counter < props.stock) {
      setCount(counter + 1);
    }
  }

  function handleDecrement() {
    if (counter > 1) {
      setCount(counter - 1);
    }
  }

  return (
    <div className="clickCounter">
      <div className="cartButton">
        <button id="plus" className="buttonAdd" onClick={handleIncrement}>
          +
        </button>
        <div>{counter}</div>
        <button className="buttonSubstract" onClick={handleDecrement}>
          -
        </button>
      </div>
      <div>
        <button className="addToCart">Agregar al carrito</button>
      </div>
    </div>
  );
}

/*ver onAdd*/

export default ItemCount;
