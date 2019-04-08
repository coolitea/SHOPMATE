import * as React from 'react';
import { attributeAction, productAction } from 'store/actions';
import { rootState } from 'store/reducers';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { attribute, review } from 'store/models';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Params } from 'lib/type';

interface Props extends RouteComponentProps<Params> {
  getAttributes: typeof attributeAction.attributeRequest;
  getReviews: typeof productAction.reviewRequest;
  attributes: attribute[];
  reviews: review[];
}

class DetailContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.getAttributes(this.props.match.params.id);
    this.props.getReviews(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        DetailContainer
      </div>
    );
  }
}

const mapStateToProps = (rootState: rootState) => ({
  attributes: rootState.attribute.attributes,
  reviews: rootState.product.reviews,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getAttributes: (id: string) => dispatch(attributeAction.attributeRequest(id)),
  getReviews: (id: string) => dispatch(productAction.reviewRequest(id)),
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailContainer);

export default withRouter(connectModule);