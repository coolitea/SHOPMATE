import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import "./List.scss";

interface Props extends RouteComponentProps {
  name: string;
  price: string;
  thumbnail: string;
  product_id: number;
}

const List: React.SFC<Props> = ({
  name,
  price,
  thumbnail,
  product_id,
  history
}) => (
  <li className="list">
    <span className="name">
      {name} ${price}
    </span>
  </li>
);

export default withRouter(List);
