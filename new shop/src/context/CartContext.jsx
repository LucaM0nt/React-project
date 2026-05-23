import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }

  function removeFromCart(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  function removeOneFromCart(productId) {
    const index = cartItems.findIndex((item) => item.id === productId);
    if (index === -1) return;

    const nextItems = [...cartItems];
    nextItems.splice(index, 1);
    setCartItems(nextItems);
  }

  const cartCount = cartItems.length;
  const cartTotal = (() => {
    let total = 0;
    for (let item of cartItems) {
      total += item.price;
    }
    return total;
  })();

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        removeOneFromCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
