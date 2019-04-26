import * as React from "react";
import { MainTemplate, Footer } from "components";
import { HeaderContainer, HomeContainer } from "containers";

const Home: React.FC = () => (
  <MainTemplate header={<HeaderContainer />} footer={<Footer />}>
    <HomeContainer />
  </MainTemplate>
);

export default Home;
