import * as React from "react";
import { cartAction } from "store/actions";
import { rootState } from "store/reducers";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { cart } from "store/models";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {
  listOfCart: typeof cartAction.listCartRequest;
  totalAmount: typeof cartAction.totalAmountRequest;
  cart: cart[];
}

class CartContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.listOfCart();
    this.props.totalAmount();
  }

  render() {
    return <>cart container</>;
  }
}

const mapStateToProps = (rootState: rootState) => ({
  cart: rootState.shoppingcart.cart
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  listOfCart: () => dispatch(cartAction.listCartRequest()),
  totalAmount: () => dispatch(cartAction.totalAmountRequest())
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);

export default withRouter(connectModule);
