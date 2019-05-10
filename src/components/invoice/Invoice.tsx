import * as React from "react";
import "./Invoice.scss";
import { Responsive, Button, Modal } from "components/common";
import { cart, region } from "store/models";
import { ToastContainer } from "react-toastify";

interface Props {
  cart: cart[];
  subtotal: string;
  show: boolean;
  onShow: () => void;
  region: region[];
  changeSelect: (e: { target: HTMLSelectElement }) => void;
  selected: region[];
  total: string;
}

const Invoice: React.SFC<Props> = ({
  cart,
  subtotal,
  show,
  onShow,
  region,
  changeSelect,
  selected,
  total
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
                <select onChange={changeSelect}>
                  {region.map((data, i) => (
                    <option value={data.shipping_id} key={i}>
                      {data.shipping_type}
                    </option>
                  ))}
                </select>
              </td>
              <td />
              <td className="shippingcost_name">SHIPPING COST</td>
              <td className="shipping_cost">$ {selected[0] ? selected[0].shipping_cost : 0}</td>
            </tr>
            <tr>
              <td />
              <td />
              <td className="totalname">TOTAL</td>
              <td className="total">$ {total}</td>
            </tr>
          </tfoot>
        </table>
        <Button className="big1" onClick={onShow}>
          Checkout
        </Button>
        <Modal show={show} onClose={onShow} />
      </div>
    </Responsive>
  );
};

export default Invoice;
