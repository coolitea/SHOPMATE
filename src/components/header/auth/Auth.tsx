import * as React from "react";
import "./Auth.scss";
import cn from "classnames";
import { Input, Button } from "components/common";
import { customer } from "store/models";
import storage from "lib/storage";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { ToastContainer } from "react-toastify";

interface Props extends RouteComponentProps {
  clickRegister: () => void;
  clickLogin: () => void;
  changeInput: (num: number, e: { target: HTMLInputElement }) => void;
  valCheck: (num: number, e: { target: HTMLInputElement }) => void;
  valCheckMsg: string[];
  checkAll: boolean;
  user?: customer;
}

const Auth: React.SFC<Props> = ({
  clickRegister,
  clickLogin,
  changeInput,
  valCheck,
  valCheckMsg,
  checkAll,
  user,
  history
}) => {
  const [auth, setAuth] = React.useState(true);
  const [signin, setSignin] = React.useState(false);
  const [register, setRegister] = React.useState(false);
  const out = () => {
    storage.remove("USER-KEY");
    location.href = "/";
  };
  const noAuth = (
    <p>
      Hi <strong onClick={() => setSignin(!signin)}>Sing in</strong> or{" "}
      <strong onClick={() => setRegister(!register)}>Register</strong>
    </p>
  );
  const yesAuth = user && (
    <p>
      Hi <strong className="name">{user.name}</strong>
      <span className="out" onClick={() => out()}>
        log out
      </span>
    </p>
  );
  return (
    <>
      <div className={auth ? "auth open" : "auth"}>
        {user ? yesAuth : noAuth}
      </div>
      <div className={signin ? "signin open" : "signin"}>
        <div className="content">
          <div className="x" onClick={() => setSignin(false)}>
            <span />
            <span />
          </div>
          <div className="title">Sign In</div>
          <Input
            type="email"
            placeholder="email"
            className="email"
            changeInput={changeInput}
            valCheck={valCheck}
            num={1}
          />
          <p className={cn("errMsg", { msgShow: valCheckMsg[1] })}>
            {valCheckMsg[1]}
          </p>
          <Input
            type="password"
            placeholder="password"
            changeInput={changeInput}
            valCheck={valCheck}
            num={2}
          />
          <p className={cn("errMsg", { msgShow: valCheckMsg[2] })}>
            {valCheckMsg[2]}
          </p>
          <Button className="medium1" onClick={clickLogin}>
            Sign in
          </Button>
        </div>
      </div>
      <div className={register ? "register open" : "register"}>
        <div className="content">
          <div className="x" onClick={() => setRegister(false)}>
            <span />
            <span />
          </div>
          <div className="title">Register</div>
          <Input
            type="text"
            placeholder="name"
            className="name"
            changeInput={changeInput}
            valCheck={valCheck}
            num={0}
          />
          <p className={cn("errMsg", { msgShow: valCheckMsg[0] })}>
            {valCheckMsg[0]}
          </p>
          <Input
            type="email"
            placeholder="email"
            className="email"
            changeInput={changeInput}
            valCheck={valCheck}
            num={1}
          />
          <p className={cn("errMsg", { msgShow: valCheckMsg[1] })}>
            {valCheckMsg[1]}
          </p>
          <Input
            type="password"
            placeholder="password"
            changeInput={changeInput}
            valCheck={valCheck}
            num={2}
          />
          <p className={cn("errMsg", { msgShow: valCheckMsg[2] })}>
            {valCheckMsg[2]}
          </p>
          <Button className="medium1" onClick={clickRegister}>
            Register
          </Button>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default withRouter(Auth);
