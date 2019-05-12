import * as React from "react";
import "./Cart.scss";
import { Responsive, Button, Modal } from "components/common";
import { cartAction } from "store/actions";
import { cart, shipping, customer } from "store/models";
import { FaTrash } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import Personal from "./personal";

interface Props {
  cart: cart[];
  total: string;
  emptyCart: typeof cartAction.empyCartRequest;
  removeProduct: typeof cartAction.removeProductRequest;
  update: typeof cartAction.updateRequest;
  show: boolean;
  onShow: () => void;
  changeInput: (num: number, e: { target: HTMLInputElement }) => void;
  valCheck: (num: number, e: { target: HTMLInputElement }) => void;
  valCheckMsg: string[];
  checkAll: boolean;
  clickNext: () => void;
  shipping: shipping[];
  changeSelect: (e: { target: HTMLSelectElement }) => void;
  user: customer;
}

const Cart: React.SFC<Props> = ({
  cart,
  total,
  emptyCart,
  removeProduct,
  update,
  show,
  onShow,
  changeInput,
  valCheck,
  valCheckMsg,
  checkAll,
  clickNext,
  shipping,
  changeSelect,
  user
}) => (
  <Responsive>
    <div className="cartcontainer">
      <h2>Shopping Cart</h2>
      <div className="deleteall" onClick={() => emptyCart()}>
        Empy all items
        <ToastContainer />
      </div>
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
                <span
                  className="calc"
                  onClick={() =>
                    update({
                      item_id: row.item_id,
                      quantity: row.quantity += 1
                    })
                  }
                >
                  +
                </span>
                <span
                  className="calc"
                  onClick={() =>
                    update({
                      item_id: row.item_id,
                      quantity: row.quantity -= 1
                    })
                  }
                >
                  -
                </span>
                <span>
                  <FaTrash
                    style={{
                      transform: "translateY(2px)",
                      cursor: "pointer"
                    }}
                    onClick={() => removeProduct(row.item_id)}
                  />
                  <ToastContainer />
                </span>
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
            <td className="totalname">TOTAL</td>
            <td className="total">$ {total}</td>
          </tr>
        </tfoot>
      </table>
      <Button className="big1" onClick={onShow}>
        Next
      </Button>
      <Modal
        show={show}
        onClose={onShow}
        children={
          <Personal
            changeInput={changeInput}
            valCheck={valCheck}
            valCheckMsg={valCheckMsg}
            checkAll={checkAll}
            clickNext={clickNext}
            shipping={shipping}
            changeSelect={changeSelect}
            user={user}
          />
        }
      />
    </div>
  </Responsive>
);

export default Cart;
