import {Cart, CartStepOne, CartStepTwo, Favourite, Home, Products, ProductDetails} from '../pages';
import CartStepThree from '../pages/CartStepThree';

export const routes = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/products',
		element: <Products />,
	},
	{
		path: '/product-details/:id',
		element: <ProductDetails />,
	},
	{
		path: '/cart',
		element: <Cart />,
	},
	{
		path: '/favourite',
		element: <Favourite />,
	},
	{
		path: '/cart/first-step',
		element: <CartStepOne />,
	},
	{
		path: '/cart/second-step',
		element: <CartStepTwo />,
	},
	{
		path: '/cart/third-step',
		element: <CartStepThree />,
	},
	{
		path: '*',
		element: <Home />,
	},
];
