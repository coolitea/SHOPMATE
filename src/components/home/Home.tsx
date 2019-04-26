import * as React from "react";
import "./Home.scss";
import { departments, categories } from "store/models";
import Responsive from "components/common/Responsive";

import HomeJumbotron from "./HomeJumbotron";
import GreatStuff from "./GreatStuff";
import Subscription from "./Subscription";

interface Props {
  departments: departments[];
  categories: categories[];
}

const Home: React.SFC<Props> = ({ departments, categories }) => {
  return (
    <Responsive>
      <HomeJumbotron />
      <GreatStuff departments={departments} categories={categories} />
      <Subscription />
    </Responsive>
  );
};

export default Home;
