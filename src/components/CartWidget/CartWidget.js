import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { cartContext } from "../../store/cartContext";

function CartWidget() {
  const { quantity } = useContext(cartContext);
  return (
    <Link to="/cart">
      <FontAwesomeIcon icon={faCartShopping} />
      {quantity > 0 && (      <span>{quantity}</span>)}
    
    </Link>
  );
}

export default CartWidget;
