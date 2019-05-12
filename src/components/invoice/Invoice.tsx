import * as React from "react";
import "./Invoice.scss";
import { Responsive, Button, Modal } from "components/common";
import { cart, region, customer, order } from "store/models";
import { stripeAction } from "store/actions";
import Payment from "./payment";

import { ToastContainer } from "react-toastify";

interface Props {
  cart: cart[];
  subtotal: string;
  show: boolean;
  onShow: () => void;
  region: region[];
  changeSelect: (e: { target: HTMLSelectElement }) => void;
  charge: typeof stripeAction.postChargeRequest;
  selected: region[];
  total: string;
  user: customer;
  currentorder: order;
}

const Invoice: React.SFC<Props> = ({
  cart,
  subtotal,
  show,
  onShow,
  region,
  changeSelect,
  selected,
  total,
  user,
  currentorder,
  charge
}) => {
  return (
    <Responsive>
      <div className="invoice_container">
        <h2>Invoice</h2>
        <table>
          <thead>
            <tr>
              <th>PRODUCT NAME</th>
              <th>QUANTITY</th>
              <th>UNIT PRICE</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((row, i) => (
              <tr key={i}>
                <td>
                  <div className="name">{row.name}</div>
                  <div className="attributes">
                    Size: {row.attributes.split(",")[0]}
                  </div>
                  <div className="attributes">
                    Color: {row.attributes.split(",")[1]}
                  </div>
                </td>
                <td>
                  <span>{row.quantity}</span>
                </td>
                <td>$ {row.price}</td>
                <td>$ {row.subtotal}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td />
              <td />
              <td className="subtotalname">SUB TOTAL</td>
              <td className="subtotal">$ {subtotal}</td>
            </tr>
            <tr>
              <td>
                <select onChange={changeSelect} defaultValue="default">
                  <option value="default" disabled>
                    Choose here
                  </option>
                  {region.map((data, i) => (
                    <option value={data.shipping_id} key={i}>
                      {data.shipping_type}
                    </option>
                  ))}
                </select>
              </td>
              <td />
              <td className="shippingcost_name">SHIPPING COST</td>
              <td className="shipping_cost">
                $ {selected[0] ? selected[0].shipping_cost : 0}
              </td>
            </tr>
            <tr>
              <td />
              <td />
              <td className="totalname">TOTAL</td>
              <td className="total">$ {total}</td>
            </tr>
          </tfoot>
        </table>
        <div className="delivery_information">
          <h3>Delivery information</h3>
          <ul>
            <li>name: {user.name}</li>
            <li>address: {user.address_1}</li>
            <li>city: {user.city}</li>
            <li>country: {user.country}</li>
            <li>phone: {user.mob_phone}</li>
            <li>postal code: {user.postal_code}</li>
          </ul>
        </div>
        <Button className="big1" onClick={onShow}>
          Checkout
        </Button>
        <Modal
          show={show}
          onClose={onShow}
          children={
            <Payment currentorder={currentorder} charge={charge} user={user}/>
          }
        />
      </div>
    </Responsive>
  );
};

export default Invoice;
