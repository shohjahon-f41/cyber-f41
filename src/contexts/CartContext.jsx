import {createContext, useState} from 'react';

export const CartContext = createContext(null);

function CartProvider({children}) {
	/**
	 *
	 * @param {*} data
	 */

	const locale = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
	const [cart, setCart] = useState(locale);

	function setItem(data) {
		setCart(data);
		localStorage.setItem('cart', JSON.stringify(data));
	}

	function addCart(data) {
		if (cart.some((item) => item.id === data.id)) {
			// setCart(cart.map((item) => (item.id === data.id ? {...item, qty: (item.qty += 1)} : {...item})));
			// localStorage.setItem('cart', JSON.stringify());
			setItem(cart.map((item) => (item.id === data.id ? {...item, qty: (item.qty += 1)} : {...item})));
			console.log(cart)
		} else {
			let obj = {...data, qty: 1};
			// setCart([...cart, obj]);
			// localStorage.setItem('cart', JSON.stringify([...cart, obj]));
			setItem([...cart, obj]);
		}
	}

	function incrementData(data) {
		/** Increment */
		setItem(cart.map((item) => (item.id === data.id ? {...item, qty: (item.qty += 1)} : {...item})));
	}

	function decrementData(data) {
		/** Decrement */
		setItem(cart.map((item) => (item.id === data.id ? {...item, qty: item.qty === 1 ? 1 : (item.qty -= 1)} : {...item})));
	}

	function deleteItem(data) {
		setItem(cart.filter((item) => item.id !== data.id));
	}

	function deleteAll() {
		setItem([]);
	}

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
