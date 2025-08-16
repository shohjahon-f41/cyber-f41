import { createContext, useState } from "react";

export const CartContext = createContext(null);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  /**
   *
   * @param {*} data
   */
  function addCart(data) {
    if (cart.some((item) => item.id === data.id)) {
      setCart(
        cart.map((item) =>
          item.id === data.id ? { ...item, qty: (item.qty += 1) } : { ...item }
        )
      );
    } else {
      let obj = { ...data, qty: 1 };
      setCart([...cart, obj]);
    }
  }

  function incrementData(data) {
    /** Increment */
    setCart(
      cart.map((item) =>
        item.id === data.id ? { ...item, qty: (item.qty += 1) } : { ...item }
      )
    );
  }

  function decrementData(data) {
    /** Decrement */
    setCart(
      cart.map((item) =>
        item.id === data.id
          ? { ...item, qty: item.qty === 1 ? 1 : (item.qty -= 1) }
          : { ...item }
      )
    );
  }

  function deleteItem(data) {
    setCart(cart.filter((item) => item.id !== data.id));
  }

  function deleteAll() {
    setCart([])
  }

  console.log(cart);
  return (
    <CartContext.Provider
      value={{
        addCart,
        cart,
        incrementData,
        decrementData,
        deleteItem,
        deleteAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
