import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  let copyCart = [...cart];

  function addToCart(data, counter) {
    // ); /*adaptarlo para que reciba parámetros y poder guardarlo en carrito con prop item y quantity*/
    if (isInCart(data.id)) {
      /*existe en carrito?*/
      const dataId = findItemData(data.id);
      dataId.counter += counter;
      setCart(copyCart);
      console.log(copyCart);
    } else {
      copyCart.push({ ...data, counter });
      setCart(copyCart);
      console.log(copyCart);
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
    copyCart.splice(findIndex, 1);
    setCart(copyCart);
    console.log(copyCart);
  }

  function clearCart() {
    copyCart= []
    setCart(copyCart)
    console.log(copyCart)    
  }

  return (
    <cartContext.Provider value={{ cart, addToCart, removeItem, clearCart }}>
      {children}
    </cartContext.Provider>
  );

  /*agregar las functions necesarias en value*/
}
