import * as React from "react";
import "./Cart.scss";
import { Responsive } from "components/common";
import { cartAction } from "store/actions";
import { cart } from "store/models";
import { FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
interface Props {
  cart: cart[];
  total: string;
  emptyCart: typeof cartAction.empyCartRequest;
  removeProduct: typeof cartAction.removeProductRequest;
  update: typeof cartAction.updateRequest;
}

const Cart: React.SFC<Props> = ({
  cart,
  total,
  emptyCart,
  removeProduct,
  update
}) => (
  <Responsive>
    <div className="cartcontainer">
      <h2>Shopping Cart</h2>
      <div className="deleteall" onClick={() => {
        toast.success("removed", { autoClose: 1000 });
        return emptyCart()
      }}>
        Empy all items
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
                    onClick={() => {
                      toast.success("removed", { autoClose: 1000 });
                      return removeProduct(row.item_id)
                    }}
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
    </div>
  </Responsive>
);

export default Cart;
