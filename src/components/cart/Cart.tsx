import * as React from "react";
import "./Cart.scss";
import { Responsive } from "components/common";
import { cart } from "store/models";

interface Props {
  cart: cart[];
  total: string;
}

const Cart: React.SFC<Props> = ({ cart, total }) => {
  return <Responsive>Cart</Responsive>;
};

export default Cart;
