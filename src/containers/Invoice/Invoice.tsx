import * as React from "react";
import {
  cartAction,
  shippingAction,
  orderAction,
  stripeAction
} from "store/actions";
import { rootState } from "store/reducers";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { cart, customer, region, order } from "store/models";
import { Invoice } from "components";
import storage from "lib/storage";

interface Props {
  listOfCart: typeof cartAction.listCartRequest;
  totalAmount: typeof cartAction.totalAmountRequest;
  getShippingById: typeof shippingAction.getShippingByIdRequest;
  postOrder: typeof orderAction.postOrderRequest;
  getOrder: typeof orderAction.getOrderByCustomerRequest;
  charge: typeof stripeAction.postChargeRequest;
  cart: cart[];
  subtotal: string;
  user: customer;
  region: region[];
  currentorder: order;
}

interface InvoiceState {
  show: boolean;
  shipping_id: string;
  selected: region[];
  total: string;
}

class InvoiceContainer extends React.Component<Props, InvoiceState> {
  state = {
    show: false,
    shipping_id: "",
    selected: [],
    total: "0"
  };

  componentDidMount() {
    this.props.listOfCart();
    this.props.totalAmount();
    this.props.getOrder();
  }
  componentDidUpdate(prevProps: Props) {
    const { user } = this.props;
    if (
      prevProps.user.shipping_region_id !== user.shipping_region_id &&
      user.shipping_region_id
    ) {
      this.props.getShippingById(user.shipping_region_id);
    }
  }
  onShow() {
    const data = {
      cart_id: storage.get("CART_ID"),
      shipping_id: parseInt(this.state.shipping_id),
      tax_id: 2
    };
    // this.props.postOrder(data);
    this.setState({ show: !this.state.show });
  }
  changeSelect = (e: { target: HTMLSelectElement }) => {
    const value = e.target.value;
    let selected = this.props.region.filter(
      data => data.shipping_id.toString() === value
    );
    this.setState({
      shipping_id: value,
      selected: selected,
      total: (
        parseFloat(this.props.subtotal) + parseFloat(selected[0].shipping_cost)
      ).toString()
    });
  };
  render() {
    const { cart, subtotal, region, user, currentorder, charge } = this.props;
    const { show, selected, total } = this.state;
    return (
      <Invoice
        cart={cart}
        subtotal={subtotal}
        show={show}
        onShow={this.onShow.bind(this)}
        region={region}
        changeSelect={this.changeSelect.bind(this)}
        selected={selected}
        total={total}
        user={user}
        currentorder={currentorder}
        charge={charge}
      />
    );
  }
}

const mapStateToProps = (rootState: rootState) => ({
  cart: rootState.shoppingcart.cart,
  subtotal: rootState.shoppingcart.total_amount,
  user: rootState.customer.user,
  region: rootState.deliver.region,
  currentorder: rootState.order.order[rootState.order.order.length - 1]
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  listOfCart: () => dispatch(cartAction.listCartRequest()),
  totalAmount: () => dispatch(cartAction.totalAmountRequest()),
  getShippingById: (id: number) =>
    dispatch(shippingAction.getShippingByIdRequest(id)),
  postOrder: (data: any) => dispatch(orderAction.postOrderRequest(data)),
  getOrder: () => dispatch(orderAction.getOrderByCustomerRequest()),
  charge: (data: any) => dispatch(stripeAction.postChargeRequest(data))
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceContainer);

export default connectModule;
