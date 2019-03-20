import * as React from 'react';
import './Header.scss';
import Responsive from 'components/common/Responsive';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { departments } from 'store/models';
import { FaOpencart, FaSearch } from "react-icons/fa";

interface Props extends RouteComponentProps {
  departments: departments[];
}

const Header: React.SFC<Props> = ({ departments, history }) => {
  const [burger, setBurger] = React.useState(false)
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
            placeholder="search anithing"
          />
        </div>
        <div className="cart" >
          <FaOpencart style={{ color: 'white' }} />
        </div>
        <div className={burger ? 'burger open' : 'burger'} onClick={() => setBurger(!burger)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={burger ? 'side open' : 'side'}>
          {/* {departments && departments.map((data, i) => (
              <div key={i} className="department">{data.name}</div>
            ))} */}
        </div>
      </header>
    </Responsive>
  )
}

export default withRouter(Header);