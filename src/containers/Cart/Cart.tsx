import * as React from "react";
import { cartAction, authAction, shippingAction } from "store/actions";
import { rootState } from "store/reducers";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { cart, shipping } from "store/models";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Cart } from "components";

interface Props extends RouteComponentProps {
  listOfCart: typeof cartAction.listCartRequest;
  totalAmount: typeof cartAction.totalAmountRequest;
  emptyCart: typeof cartAction.empyCartRequest;
  removeProduct: typeof cartAction.removeProductRequest;
  update: typeof cartAction.updateRequest;
  updateUser: typeof authAction.putUserRequest;
  updateUserAddress: typeof authAction.putUserAddressRequest;
  getShipping: typeof shippingAction.getShippingRequest;
  cart: cart[];
  total: string;
  shipping: shipping[];
}

interface CartState {
  show: boolean;
  mob_phone: string;
  address_1: string;
  city: string;
  region: string;
  postal_code: string;
  country: string;
  shipping_region_id: string;
  valCheckMsg: string[];
  checkAll: boolean;
}

class CartContainer extends React.Component<Props, CartState> {
  state = {
    show: false,
    mob_phone: "",
    address_1: "",
    city: "",
    region: "",
    postal_code: "",
    country: "",
    shipping_region_id: "",
    valCheckMsg: ["", "", "", ""],
    checkAll: false
  };

  componentDidMount() {
    this.props.listOfCart();
    this.props.totalAmount();
    this.props.getShipping();
  }
  onShow() {
    this.setState({ show: !this.state.show });
  }
  changeInput = (num: number, e: { target: HTMLInputElement }) => {
    const checkMsg = [
      ...this.state.valCheckMsg.slice(0, num),
      "",
      ...this.state.valCheckMsg.slice(num + 1)
    ];
    const key = e.target.id as keyof CartState;
    const value = e.target.value;
    this.setState({
      ...this.state,
      valCheckMsg: checkMsg,
      [key]: value
    });
  };
  changeSelect = (e: { target: HTMLSelectElement }) => {
    const value = e.target.value;
    this.setState({
      shipping_region_id: value
    })
  }
  valCheck = (num: number, e: { target: HTMLInputElement }) => {
    const checkMsg = [
        ...this.state.valCheckMsg.slice(0, num),
        "",
        ...this.state.valCheckMsg.slice(num + 1)
      ],
      val = e.target.value;
    switch (num) {
      case 0:
        if (val === "") {
          checkMsg[num] = "Please enter mobile phone";
        } else if (false) {
          checkMsg[num] = "Please enter correct mobile phone format";
        }
        break;
      case 1:
        if (val === "") {
          checkMsg[num] = "Please enter address";
        } else if (false) {
          checkMsg[num] = "Please enter correct address format";
        }
        break;
      case 2:
        if (val === "") {
          checkMsg[num] = "Please enter city";
        } else if (false) {
          checkMsg[num] = "Please enter correct city format";
        }
        break;
      case 3:
        if (val === "") {
          checkMsg[num] = "Please enter region";
        } else if (false) {
          checkMsg[num] = "Please enter correct region format";
        }
        break;
      case 4:
        if (val === "") {
          checkMsg[num] = "Please enter postal code";
        } else if (false) {
          checkMsg[num] = "Please enter correct postal code format";
        }
        break;
      case 5:
        if (val === "") {
          checkMsg[num] = "Please enter country";
        } else if (false) {
          checkMsg[num] = "Please enter correct country format";
        }
        break;
      default:
        break;
    }
    this.setState(
      {
        valCheckMsg: checkMsg
      },
      this.beforeAuth
    );
  };
  beforeAuth = () => {
    if (this.state.valCheckMsg.every(msg => msg === "")) {
      this.setState({
        checkAll: true
      });
    }
  };
  clickNext = () => {
    if (this.state.checkAll) {
      const {
        mob_phone,
        address_1,
        city,
        region,
        postal_code,
        country,
        shipping_region_id
      } = this.state;
      const form = {
        mob_phone,
        address_1,
        city,
        region,
        postal_code,
        country,
        shipping_region_id
      };
      console.log(form)
    }
  };
  render() {
    const { cart, total, emptyCart, removeProduct, update, shipping } = this.props;
    const { show } = this.state;
    return (
      <Cart
        cart={cart}
        total={total}
        emptyCart={emptyCart}
        removeProduct={removeProduct}
        update={update}
        show={show}
        onShow={this.onShow.bind(this)}
        changeInput={this.changeInput.bind(this)}
        valCheck={this.valCheck.bind(this)}
        valCheckMsg={this.state.valCheckMsg}
        checkAll={this.state.checkAll}
        clickNext={this.clickNext.bind(this)}
        shipping={shipping}
        changeSelect={this.changeSelect.bind(this)}
      />
    );
  }
}

const mapStateToProps = (rootState: rootState) => ({
  cart: rootState.shoppingcart.cart,
  total: rootState.shoppingcart.total_amount,
  shipping: rootState.deliver.shipping
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  listOfCart: () => dispatch(cartAction.listCartRequest()),
  totalAmount: () => dispatch(cartAction.totalAmountRequest()),
  emptyCart: () => dispatch(cartAction.empyCartRequest()),
  removeProduct: (item_id: number) =>
    dispatch(cartAction.removeProductRequest(item_id)),
  update: (form: any) => dispatch(cartAction.updateRequest(form)),
  updateUser: (form: any) => dispatch(authAction.putUserRequest(form)),
  updateUserAddress: (form: any) =>
    dispatch(authAction.putUserAddressRequest(form)),
  getShipping: () => dispatch(shippingAction.getShippingRequest())
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);

export default withRouter(connectModule);
