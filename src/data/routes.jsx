import { Cart, Favourite, Home, Products, ProductsItem } from "../pages";

export const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/products",
        element: <Products />
    },
    {
        path: "/products:id",
        element: <ProductsItem />
    },
    {
        path: "/cart",
        element: <Cart />
    },
    {
        path: "/favourite",
        element: <Favourite />
    },
    {
        path: "*",
        element: <Home />
    },
]