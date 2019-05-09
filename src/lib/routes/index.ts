import { Home, Product, Detail, Cart, Invoice } from "page";

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
  },
  {
    path: "/invoice",
    page: Invoice,
    exact: true
  }
];
