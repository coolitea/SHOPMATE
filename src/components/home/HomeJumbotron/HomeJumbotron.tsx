import * as React from 'react';
import './HomeJumbotron.scss';
import Button from 'components/common/Button';

const HomeJumbotron: React.SFC = () => (
  <div className="homejumbotron">
    <div className="homejumbotron_contents">
      <p className="title">Background and development</p>
      <p className="description">Convergent the dictates of the consumer: background and development</p>
      <Button className="medium1">View All</Button>
    </div>
  </div>
);

export default HomeJumbotron;