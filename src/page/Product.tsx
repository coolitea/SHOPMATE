import * as React from 'react';
import { MainTemplate, Footer } from 'components';
import { HeaderContainer, ProductsContainer } from 'containers'

const Product: React.SFC = () => (
  <MainTemplate 
    header={<HeaderContainer />}
    footer={<Footer />}
  >
    <ProductsContainer />
  </MainTemplate>
);

export default Product;