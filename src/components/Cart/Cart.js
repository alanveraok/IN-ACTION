import { useContext, useEffect } from "react";

import { Link } from "react-router-dom";

import { cartContext } from "../../store/cartContext";

import CartItem from "../CartItem/CartItem";

function Cart() {
  const { cart, total, quantity } = useContext(cartContext);

  if (quantity === 0) {
    return <Link to="/">NO HAY PRODUCTOS EN EL CARRITO, VER PRODUCTOS.</Link>;
  }

  return (
    <div>
      {cart.map((data) => {
        return <CartItem key={data.id} data={data} />;
      })}

      <p>TOTAL:{total}</p>
    </div>
  );
}

export default Cart;
