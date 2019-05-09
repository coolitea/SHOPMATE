import * as React from "react";
import { cartAction, authAction, shippingAction } from "store/actions";
import { rootState } from "store/reducers";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { cart, shipping, customer } from "store/models";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Cart } from "components";

interface Props extends RouteComponentProps {
  listOfCart: typeof cartAction.listCartRequest;
  totalAmount: typeof cartAction.totalAmountRequest;
  emptyCart: typeof cartAction.empyCartRequest;
  removeProduct: typeof cartAction.removeProductRequest;
  update: typeof cartAction.updateRequest;
  updateUser: typeof authAction.putUserRequest;
  getShipping: typeof shippingAction.getShippingRequest;
  cart: cart[];
  total: string;
  shipping: shipping[];
  user: customer;
}

interface CartState {
  show: boolean;
  mob_phone: string;
  address_1: string;
  city: string;
  region: string;
  postal_code: number;
  country: string;
  shipping_region_id: string;
  valCheckMsg: string[];
  checkAll: boolean;
}

class InvoiceContainer extends React.Component<Props, CartState> {
  state = {
    show: false,
    mob_phone: "",
    address_1: "",
    city: "",
    region: "",
    postal_code: 0,
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
    });
  };
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
          checkMsg[num] = "Please enter credit card";
        } else if (false) {
          checkMsg[num] = "Please enter correct credit card format";
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
      const { email, name } = this.props.user;
      const form = {
        name,
        email,
        mob_phone,
        address_1,
        city,
        region,
        postal_code,
        country,
        shipping_region_id
      };
      this.props.updateUser(form);
    }
  };
  render() {
    const {
      cart,
      total,
      emptyCart,
      removeProduct,
      update,
      shipping
    } = this.props;
    const { show } = this.state;
    return (
      <div>Invoice Container</div>
    );
  }
}

const mapStateToProps = (rootState: rootState) => ({
  cart: rootState.shoppingcart.cart,
  total: rootState.shoppingcart.total_amount,
  shipping: rootState.deliver.shipping,
  user: rootState.customer.user
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  listOfCart: () => dispatch(cartAction.listCartRequest()),
  totalAmount: () => dispatch(cartAction.totalAmountRequest()),
  emptyCart: () => dispatch(cartAction.empyCartRequest()),
  removeProduct: (item_id: number) =>
    dispatch(cartAction.removeProductRequest(item_id)),
  update: (form: any) => dispatch(cartAction.updateRequest(form)),
  updateUser: (form: any) => dispatch(authAction.putUserRequest(form)),
  getShipping: () => dispatch(shippingAction.getShippingRequest())
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceContainer);

export default withRouter(connectModule);
