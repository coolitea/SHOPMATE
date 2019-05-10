import * as React from "react";
import { cartAction, shippingAction, orderAction } from "store/actions";
import { rootState } from "store/reducers";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { cart, customer, region } from "store/models";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Invoice } from "components";
import storage from "lib/storage";

interface Props extends RouteComponentProps {
  listOfCart: typeof cartAction.listCartRequest;
  totalAmount: typeof cartAction.totalAmountRequest;
  getShippingById: typeof shippingAction.getShippingByIdRequest;
  postOrder: typeof orderAction.postOrderRequest;
  cart: cart[];
  subtotal: string;
  user: customer;
  region: region[];
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
    this.props.postOrder(data);
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
    const { cart, subtotal, region, user } = this.props;
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
      />
    );
  }
}

const mapStateToProps = (rootState: rootState) => ({
  cart: rootState.shoppingcart.cart,
  subtotal: rootState.shoppingcart.total_amount,
  user: rootState.customer.user,
  region: rootState.deliver.region
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  listOfCart: () => dispatch(cartAction.listCartRequest()),
  totalAmount: () => dispatch(cartAction.totalAmountRequest()),
  getShippingById: (id: number) =>
    dispatch(shippingAction.getShippingByIdRequest(id)),
  postOrder: (data: any) => dispatch(orderAction.postOrderRequest(data))
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceContainer);

export default withRouter(connectModule);
