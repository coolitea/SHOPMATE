import * as React from 'react';
import './Header.scss';
import Responsive from 'components/common/Responsive';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { departments } from 'store/models';
import { FaOpencart, FaSearch } from "react-icons/fa";
import { MdReorder } from 'react-icons/md';

interface Props extends RouteComponentProps {
  departments: departments[];
}

const Header: React.SFC<Props> = ({ departments, history }) => {
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
          <FaSearch
            style={{ color: 'white' }}
            className="search-icon"
          />
          <input
            type="text"
            placeholder="search"
          />
        </div>
        <div className="cart" >
          <FaOpencart style={{ color: 'white' }} />
        </div>
        <MdReorder
          className="burger"
        />
      </header>
    </Responsive>
  )
}

export default withRouter(Header);