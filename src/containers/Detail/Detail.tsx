import * as React from "react";
import { attributeAction, productAction, cartAction } from "store/actions";
import { rootState } from "store/reducers";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { review, products_detail, attribute } from "store/models";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Params } from "lib/type";
import Detail from "components/products/detail";

interface Props extends RouteComponentProps<Params> {
  getAttributes: typeof attributeAction.attributeRequest;
  getReviews: typeof productAction.reviewRequest;
  getDetails: typeof productAction.detailRequest;
  reviews: review[];
  details: products_detail;
  star: number;
  colors: attribute[];
  sizes: attribute[];
  addToCart: typeof cartAction.addToCartRequest;
}

interface DetailState {
  quantity: number;
  color: string;
  size: string;
}
class DetailContainer extends React.Component<Props, DetailState> {
  state = {
    quantity: 1,
    color: "",
    size: ""
  };
  componentDidMount() {
    this.props.getAttributes(this.props.match.params.id);
    this.props.getDetails(this.props.match.params.id);
    this.props.getReviews(this.props.match.params.id);
  }
  onChangequantity(quantity: number) {
    this.setState({
      quantity
    });
  }
  onChangeColor(color: string) {
    this.setState({
      color
    });
  }
  onChangeSize(size: string) {
    this.setState({
      size
    });
  }
  addToCart() {
    const { color, size, quantity } = this.state;
    const { addToCart, match: { params: { id }} } = this.props;
    const data = { 
      product_id: id,
      quantity,
      attributes: `${size},${color}`,
    };
    addToCart(data);
  }
  render() {
    const { reviews, details, star, sizes, colors } = this.props;
    const { quantity } = this.state;
    return (
      <>
        <Detail
          reviews={reviews}
          details={details}
          star={star}
          sizes={sizes}
          colors={colors}
          quantity={quantity}
          onChangequantity={this.onChangequantity.bind(this)}
          onChangeColor={this.onChangeColor.bind(this)}
          onChangeSize={this.onChangeSize.bind(this)}
          addToCart={this.addToCart.bind(this)}
        />
      </>
    );
  }
}

const mapStateToProps = (rootState: rootState) => ({
  reviews: rootState.product.reviews,
  details: rootState.product.productDetail,
  star: rootState.product.star,
  colors: rootState.attribute.colors,
  sizes: rootState.attribute.sizes
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getAttributes: (id: string) => dispatch(attributeAction.attributeRequest(id)),
  getReviews: (id: string) => dispatch(productAction.reviewRequest(id)),
  getDetails: (id: string) => dispatch(productAction.detailRequest(id)),
  addToCart: (data: any) => dispatch(cartAction.addToCartRequest(data))
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailContainer);

export default withRouter(connectModule);
