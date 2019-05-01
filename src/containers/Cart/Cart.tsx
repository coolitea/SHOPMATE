import * as React from "react";
import { cartAction } from "store/actions";
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
  cart: cart[];
  total: string;
}

class CartContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.listOfCart();
    this.props.totalAmount();
  }

  render() {
    const { cart, total, emptyCart, removeProduct, update } = this.props;
    return (
      <Cart
        cart={cart}
        total={total}
        emptyCart={emptyCart}
        removeProduct={removeProduct}
        update={update}
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
  update: (form: any) => dispatch(cartAction.updateRequest(form))
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);

export default withRouter(connectModule);
