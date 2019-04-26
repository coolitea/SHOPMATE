import * as React from "react";
import "./HomeJumbotron.scss";
import Button from "components/common/Button";
import { withRouter, RouteComponentProps } from "react-router-dom";

const HomeJumbotron: React.SFC<RouteComponentProps> = ({ history }) => (
  <div className="homejumbotron">
    <div className="homejumbotron_contents">
      <div className="title">Background and development</div>
      <div className="description">
        Convergent the dictates of the consumer: background and development
      </div>
      <Button className="medium1" onClick={() => history.push("/product")}>
        View All
      </Button>
    </div>
  </div>
);

export default withRouter(HomeJumbotron);
