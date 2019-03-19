import * as React from 'react';
import './Header.scss';
import Responsive from 'components/common/Responsive';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { departments } from 'store/models';
import { FaOpencart } from "react-icons/fa";
interface Props extends RouteComponentProps {
  departments: departments[];
  isLoading: boolean;
}

const Header: React.SFC<Props> = ({ departments, history, isLoading }) => {
  return (
    <Responsive>
      <header className="header">
        <h1 onClick={() => history.push('/')}>SHOPMATE</h1>
        <div className="header_departments">
          {departments && departments.map((data, i) => (
            <div key={i} className="department">{data.name}</div>
          ))}
        </div>
        <div className="search" >
          search
        </div>
        <div className="cart" >
          <FaOpencart style={{color: 'white'}}/>
        </div>
      </header>
    </Responsive>
  )
}

export default withRouter(Header);