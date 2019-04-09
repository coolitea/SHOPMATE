import * as React from 'react';
import { attributeAction, productAction } from 'store/actions';
import { rootState } from 'store/reducers';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { attribute, review, products_detail } from 'store/models';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Params } from 'lib/type';
import Detail from 'components/products/detail';

interface Props extends RouteComponentProps<Params> {
  getAttributes: typeof attributeAction.attributeRequest;
  getReviews: typeof productAction.reviewRequest;
  getDetails: typeof productAction.detailRequest;
  attributes: attribute[];
  reviews: review[];
  details: products_detail;
  star: number;
}

class DetailContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.getAttributes(this.props.match.params.id);
    this.props.getDetails(this.props.match.params.id);
    this.props.getReviews(this.props.match.params.id);
  }
  render() {
    const { reviews, attributes, details, star } = this.props;
    return (
      <>
        <Detail
          reviews={reviews}
          attributes={attributes}
          details={details}
          star={star}
        />
      </>
    );
  }
}

const mapStateToProps = (rootState: rootState) => ({
  attributes: rootState.attribute.attributes,
  reviews: rootState.product.reviews,
  details: rootState.product.productDetail,
  star: rootState.product.star,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getAttributes: (id: string) => dispatch(attributeAction.attributeRequest(id)),
  getReviews: (id: string) => dispatch(productAction.reviewRequest(id)),
  getDetails: (id: string) => dispatch(productAction.detailRequest(id)),
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailContainer);

export default withRouter(connectModule);