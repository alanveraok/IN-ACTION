import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount(props) {
  const [counter, setCounter] = useState(1);
  /*hacerlo con const en vez de let y no usar ++*/

  function handleIncrement() {
    if (counter >= 1 && counter < props.stock) {
      setCounter(counter + 1);
    }
  }

  function handleDecrement() {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  }

  return (
    <div className="clickCounter">
      <div className="cartButton">
        <button className="buttonSubstract" onClick={handleDecrement}>
          -
        </button>
        <div>{counter}</div>
        <button id="plus" className="buttonAdd" onClick={handleIncrement}>
          +
        </button>
      </div>
      <div>
        <button onClick= { ()=> props.onAdd(counter)} className="addToCart">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

/*ver onAdd*/

export default ItemCount;
