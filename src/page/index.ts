import { withSplitting } from "lib/hoc";

export const Home = withSplitting(() => import("./Home"));
export const Product = withSplitting(() => import("./Product"));
export const Detail = withSplitting(() => import("./Detail"));
export const Cart = withSplitting(() => import("./Cart"));
export const Invoice = withSplitting(() => import("./Invoice"));
