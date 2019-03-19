import * as React from 'react';
import { MainTemplate, Footer } from 'components';
import { HeaderContainer } from 'containers'
import ContentLoader from 'react-content-loader';
const Home: React.FC = () => (
  <MainTemplate 
    header={<HeaderContainer />}
    footer={<Footer />}
  >
  </MainTemplate>
);

export default Home;