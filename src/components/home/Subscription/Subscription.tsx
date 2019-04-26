import * as React from "react";
import "./Subscription.scss";
import Button from "components/common/Button";
import { MdMailOutline } from "react-icons/md";
const Subscription: React.SFC = () => (
  <div className="subscription">
    <p className="subscription_title">10% Discount for your subscription</p>
    <p className="subscription_sub">
      Carry the day in style with this extra-large tote crafted in our chic B.B
      Collection textured PVC. Featuring colorful faux leather trim, this tote
      offers a roomy interior
    </p>
    <div className="subscription_interaction">
      <div className="mail">
        <MdMailOutline style={{ color: "#2e2e2e" }} className="mail-icon" />
        <input type="email" placeholder="Your e-mail here" />
      </div>
      <Button className="small1">Subscribe</Button>
    </div>
  </div>
);

export default Subscription;
