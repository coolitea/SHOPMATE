import * as React from 'react';
import './Home.scss';
import { departments, categories } from 'store/models';
import Responsive from 'components/common/Responsive';

import HomeJumbotron from './HomeJumbotron';

interface Props {
  departments: departments[],
  categories: categories[],
}

const Home: React.SFC<Props> = ({ departments, categories }) => {
  return (
    <Responsive>
      <HomeJumbotron />
    </Responsive>
  )
}

export default Home;