import { withSplitting } from 'lib/hoc';

export const Home = withSplitting(() => import('./Home'));
export const Product = withSplitting(() => import('./Product'));
export const Detail = withSplitting(() => import('./Detail'));

// export { default as Home } from './Home';
// export { default as Product } from './Product';