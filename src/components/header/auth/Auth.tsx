import * as React from 'react';
import './Auth.scss';
import cn from 'classnames';
import { Input, Button } from 'components/common';

interface Props {
  clickRegister: () => void;
  clickLogin: () => void;
  changeInput: (num: number, e: { target: HTMLInputElement }) => void;
  valCheck: (num: number, e: { target: HTMLInputElement }) => void;
  valCheckMsg: string[];
  checkAll: boolean;
}

const Auth: React.SFC<Props> = ({
  clickRegister,
  clickLogin,
  changeInput,
  valCheck,
  valCheckMsg,
  checkAll,
}) => {
  const [auth, setAuth] = React.useState(true);
  const [signin, setSignin] = React.useState(false);
  const [register, setRegister] = React.useState(false);
  return (
    <>
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
          <Input
            type="email"
            placeholder="email"
            className="email"
            id="email"
            changeInput={changeInput}
            valCheck={valCheck}
            num={1}
          />
          <Input
            type="password"
            placeholder="password"
            id="password"
            changeInput={changeInput}
            valCheck={valCheck}
            num={2}
          />
          <Button className="medium1" onClick={clickLogin}>Sign in</Button>
        </div>
      </div>
      <div className={register ? 'register open' : 'register'}>
        <div className="content">
          <div className="x" onClick={() => setRegister(false)}>
            <span></span>
            <span></span>
          </div>
          <div className="title">Register</div>
          <Input
            type="text"
            placeholder="name"
            className="name"
            id="name"
            changeInput={changeInput}
            valCheck={valCheck}
            num={0}
          />
          <p className={cn('errMsg', { msgShow: valCheckMsg[0] })}>
            {valCheckMsg[0]}
          </p>
          <Input
            type="email"
            placeholder="email"
            className="email"
            id="email"
            changeInput={changeInput}
            valCheck={valCheck}
            num={1}
          />
          <p className={cn('errMsg', { msgShow: valCheckMsg[1] })}>
            {valCheckMsg[1]}
          </p>
          <Input
            type="password"
            placeholder="password"
            id="password"
            changeInput={changeInput}
            valCheck={valCheck}
            num={2}
          />
          <p className={cn('errMsg', { msgShow: valCheckMsg[2] })}>
            {valCheckMsg[2]}
          </p>
          <Button className="medium1" onClick={clickRegister} >Register</Button>
        </div>
      </div>
    </>
  )
}

export default Auth;