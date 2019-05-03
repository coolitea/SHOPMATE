import * as React from "react";
import { cartAction, authAction } from "store/actions";
import { rootState } from "store/reducers";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { cart } from "store/models";
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
  cart: cart[];
  total: string;
}

interface State {
  show: boolean;
  mob_phone: string;
  address_1: string;
  city: string;
  region: string;
  postal_code: string;
  country: string;
  shipping_region_id: string;
}

class CartContainer extends React.Component<Props, State> {
  state = {
    show: false,
    mob_phone: "",
    address_1: "",
    city: "",
    region: "",
    postal_code: "",
    country: "",
    shipping_region_id: ""
  };

  componentDidMount() {
    this.props.listOfCart();
    this.props.totalAmount();
  }
  onShow() {
    this.setState({ show: !this.state.show });
  }
  render() {
    const { cart, total, emptyCart, removeProduct, update } = this.props;
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
      />
    );
  }
}

const mapStateToProps = (rootState: rootState) => ({
  cart: rootState.shoppingcart.cart,
  total: rootState.shoppingcart.total_amount
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
    dispatch(authAction.putUserAddressRequest(form))
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);

export default withRouter(connectModule);
