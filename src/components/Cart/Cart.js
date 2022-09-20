import { useContext } from "react";

import { Link } from "react-router-dom";

import { cartContext } from "../../store/cartContext";

import CartItem from "../CartItem/CartItem";

import "./Cart.css";

function Cart() {
  const { cart, total, quantity } = useContext(cartContext);

  if (quantity === 0) {
    return (
      <Link to="/">
        NO HAY PRODUCTOS EN EL CARRITO, CLICK AQUÍ PARA VER NUESTRAS FIGURAS DE
        ACCIÓN.
      </Link>
    );
  }

  return (
    <div className="inCart">
      {cart.map((data) => {
        return <CartItem key={data.id} data={data} />;
      })}

      <p>TOTAL: ${total}</p>

      <div>
        <Link to="/">
          <button className="to-cart-button">SEGUIR COMPRANDO</button>
        </Link>
        <Link to="../Form">
          <button className="to-cart-button">FINALIZAR COMPRA</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
