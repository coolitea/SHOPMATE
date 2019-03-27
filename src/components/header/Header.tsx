import * as React from 'react';
import './Header.scss';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { departments } from 'store/models';
import { FaOpencart, FaSearch } from "react-icons/fa";
import { Input, Button, Responsive } from 'components/common';

interface Props extends RouteComponentProps {
  departments: departments[];
}

const Header: React.SFC<Props> = ({ departments, history }) => {
  const [burger, setBurger] = React.useState(false);
  const [auth, setAuth] = React.useState(true);
  const [signin, setSignin] = React.useState(false);
  const [register, setRegister] = React.useState(false);
  return (
    <Responsive>
      <div className={auth ? 'auth open' : 'auth'}>
        <p>Hi! <strong onClick={() => setSignin(!signin)}>Sing in</strong> or <strong onClick={() => setRegister(!register)}>Register</strong></p>
        <p onClick={() => setAuth(false)}>x</p>
      </div>
      <div className={signin ? 'signin open' : 'signin'}>
        <div className="content">
          <div className="x" onClick={() => setSignin(false)}>
            <span></span>
            <span></span>
          </div>
          <div className="title">Sign In</div>
          <Input type="email" placeholder="email" className="email"/>
          <Input type="password" placeholder="password"/>
          <Button className="medium1">Sign in</Button>
        </div>
      </div>
      <div className={register ? 'register open' : 'register'}>
        <div className="content">
        <div className="x" onClick={() => setRegister(false)}>
            <span></span>
            <span></span>
          </div>
          <div className="title">Register</div>
          <Input type="text" placeholder="name" className="name"/>
          <Input type="email" placeholder="email" className="email"/>
          <Input type="password" placeholder="password"/>
          <Button className="medium1">Register</Button>
        </div>
      </div>
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