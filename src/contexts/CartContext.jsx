import { createContext, useState } from "react";

export const CartContext = createContext(null);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  function addCart(data) {
    if (cart.some((item) => item.id === data.id)) {
      setCart(
        cart.map((item) =>
          item.id === data.id ? { ...item, qty: (item.qty += 1) } : {...item}
        )
      );
    } else {
      let obj = { ...data, qty: 1 };
      setCart([...cart, obj]);
    }
  }
  console.log(cart);
  return (
    <CartContext.Provider value={{ addCart, cart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
