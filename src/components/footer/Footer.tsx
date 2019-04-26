import * as React from "react";
import Responsive from "components/common/Responsive";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer: React.SFC = () => (
  <Responsive>
    <footer>
      <div className="section">
        <p className="title">QUESTIONS</p>
        <ul className="list">
          <li>
            <Link to="#">Help</Link>
          </li>
          <li>
            <Link to="#">Track Order</Link>
          </li>
          <li>
            <Link to="#">Returns</Link>
          </li>
        </ul>
      </div>
      <div className="section">
        <p className="title">WHAT'S IN STORE</p>
        <ul className="list">
          <li>
            <Link to="#">Regional</Link>
          </li>
          <li>
            <Link to="#">Nature</Link>
          </li>
          <li>
            <Link to="#">Seasonal</Link>
          </li>
          <li>
            <Link to="#">Product A-Z</Link>
          </li>
          <li>
            <Link to="#">Buy Gift Vouchers</Link>
          </li>
        </ul>
      </div>
      <div className="section">
        <p className="title">FOLLOW US</p>
        <ul className="list">
          <li>
            <Link to="#">Facebook</Link>
          </li>
          <li>
            <Link to="#">Twitter</Link>
          </li>
          <li>
            <Link to="#">YouTube</Link>
          </li>
        </ul>
      </div>
      <div className="section">
        <p>2019 shopmate Ltd</p>
      </div>
    </footer>
  </Responsive>
);

export default Footer;
