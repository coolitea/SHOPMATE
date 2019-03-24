import * as React from 'react';
import './HomeJumbotron.scss';
import Button from 'components/common/Button';

const HomeJumbotron: React.SFC = () => (
  <div className="homejumbotron">
    <div className="homejumbotron_contents">
      <div className="title">Background and development</div>
      <div className="description">Convergent the dictates of the consumer: background and development</div>
      <Button className="medium1">View All</Button>
    </div>
  </div>
);

export default HomeJumbotron;