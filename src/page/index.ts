import { withSplitting } from 'lib/hoc';

export const Home = withSplitting(() => import('./Home'));
export const Product = withSplitting(() => import('./Product'));

// export { default as Home } from './Home';
// export { default as Product } from './Product';