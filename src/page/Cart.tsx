import * as React from 'react';
import { MainTemplate, Footer } from 'components';
import { HeaderContainer, CartContainer } from 'containers'

const Cart: React.SFC = () => (
  <MainTemplate 
    header={<HeaderContainer />}
    footer={<Footer />}
  >
    <CartContainer />
  </MainTemplate>
);

export default Cart;