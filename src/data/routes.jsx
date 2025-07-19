import {
  Cart,
  Favourite,
  Home,
  Products,
  ProductsItem,
  ProductDetails,
} from "../pages";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products:id",
    element: <ProductsItem />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/favourite",
    element: <Favourite />,
  },
  { path: "/product-details/:id", element: <ProductDetails /> },
  {
    path: "*",
    element: <Home />,
  },
];
