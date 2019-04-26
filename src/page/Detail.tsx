import * as React from "react";
import { MainTemplate, Footer } from "components";
import { HeaderContainer, DetailContainer } from "containers";

const Product: React.SFC = () => (
  <MainTemplate header={<HeaderContainer />} footer={<Footer />}>
    <DetailContainer />
  </MainTemplate>
);

export default Product;
