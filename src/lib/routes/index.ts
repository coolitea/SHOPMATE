import { Home, Product } from 'page';

export const routes = [
  {
    path: '/',
    page: Home,
    exact: true,
  },
  {
    path: '/product/:direction(\\d+|category|department)?/:id?',
    page: Product,
    exact: true,
  },
];