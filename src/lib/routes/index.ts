import { Home, Product, Detail, Cart } from "page";

export const routes = [
  {
    path: "/",
    page: Home,
    exact: true
  },
  {
    path: "/product/:direction(\\d+|category|department)?/:id?",
    page: Product,
    exact: true
  },
  {
    path: "/detail/:id",
    page: Detail,
    exact: true
  },
  {
    path: "/cart",
    page: Cart,
    exact: true
  }
];
