import * as React from "react";
import { MainTemplate, Footer } from "components";
import { HeaderContainer, InvoiceContainer } from "containers";

const Cart: React.SFC = () => (
  <MainTemplate header={<HeaderContainer />} footer={<Footer />}>
    <InvoiceContainer />
  </MainTemplate>
);

export default Cart;