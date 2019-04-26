import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { departments } from "store/models";
import { FaOpencart, FaSearch } from "react-icons/fa";
import { Responsive } from "components/common";
import { customer, products } from "store/models";

import "./Header.scss";
import Auth from "./auth";
import List from "./list";
import client from "lib/client/utils";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props extends RouteComponentProps {
  departments: departments[];
  clickRegister: () => void;
  clickLogin: () => void;
  changeInput: (num: number, e: { target: HTMLInputElement }) => void;
  valCheck: (num: number, e: { target: HTMLInputElement }) => void;
  valCheckMsg: string[];
  checkAll: boolean;
  user?: customer;
  onChangeSearch: (e: { target: HTMLInputElement }) => void;
  searchItems?: products[];
}

const Header: React.SFC<Props> = ({
  departments,
  history,
  clickRegister,
  clickLogin,
  changeInput,
  valCheck,
  valCheckMsg,
  checkAll,
  user,
  onChangeSearch,
  searchItems
}) => {
  const [burger, setBurger] = React.useState(false);
  const notify = () => toast.info("please sign in", { autoClose: 1500 });
  const toCart = () => history.push("/cart");
  return (
    <Responsive>
      <Auth
        clickRegister={clickRegister}
        clickLogin={clickLogin}
        changeInput={changeInput}
        valCheck={valCheck}
        valCheckMsg={valCheckMsg}
        checkAll={checkAll}
        user={user}
      />
      <header className="header">
        <h1 onClick={() => history.push("/")}>SHOPMATE</h1>
        <div className="header_departments">
          {departments &&
            departments.map((data, i) => (
              <div
                key={i}
                className="department"
                onClick={() =>
                  history.push(`/product/department/${data.department_id}`)
                }
              >
                {data.name}
              </div>
            ))}
        </div>
        <div className="search">
          <FaSearch style={{ color: "white" }} className="search-icon" />
          <input
            type="text"
            placeholder="search anything"
            onChange={e => onChangeSearch(e)}
          />
          <ul className="searchlists">
            {searchItems &&
              searchItems.map(({ name, price, thumbnail, product_id }, i) => (
                <List
                  key={i}
                  name={name}
                  price={price}
                  thumbnail={thumbnail}
                  product_id={product_id}
                />
              ))}
          </ul>
        </div>
        <div className="cart" onClick={client.isLoggedIn() ? toCart : notify}>
          <FaOpencart style={{ color: "white" }} />
          <ToastContainer />
        </div>
        <div
          className={burger ? "burger open" : "burger"}
          onClick={() => setBurger(!burger)}
        >
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className={burger ? "side open" : "side"}>
          {/* {departments && departments.map((data, i) => (
              <div key={i} className="department">{data.name}</div>
            ))} */}
        </div>
      </header>
    </Responsive>
  );
};

export default withRouter(Header);
