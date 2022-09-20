import { createContext, useState, useEffect } from "react";

export const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  let copyCart = [...cart];

  function addToCart(data, counter) {
    if (isInCart(data.id)) {
      /*existe en carrito?*/
      const dataId = findItemData(data.id);
      dataId.counter += counter;
      setCart(copyCart);
  
    } else {
    
      copyCart.push({ ...data, counter });
      setCart(copyCart);
     
    }
  }

  function isInCart(id) {
    return copyCart.some(
      (itemInCart) => itemInCart.id === Number(id)
    ); /*listo*/
  }

  function findItemData(id) {
    return copyCart.find((item) => item.id === Number(id));
    /*usar FIND*/
  }

  function removeItem(data) {
    const removedItem = findItemData(data.id);
    const findIndex = copyCart.indexOf(removedItem);
    copyCart.splice(findIndex -1 , 1);
    setCart(copyCart);

  }

  function clearCart() {
    copyCart = [];
    setCart(copyCart);

  }

  // suma de los precios
  useEffect(() => {
    const newTotal = cart.reduce(
      (acc, item) => acc + item.price * item.counter,
      0
    );
    setTotal(newTotal);
  }, [cart]);

  useEffect(() => {
    const newQuantity = cart.reduce((acc, item) => acc + item.counter, 0);
    setQuantity(newQuantity);
  }, [cart]);

  /*suma de productos*/

  return (
    <cartContext.Provider
      value={{ cart, addToCart, removeItem, clearCart, total, quantity }}
    >
      {children}
    </cartContext.Provider>
  );

  /*agregar las functions necesarias en value*/
}
