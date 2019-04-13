import * as React from 'react';
import { attributeAction, productAction } from 'store/actions';
import { rootState } from 'store/reducers';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { review, products_detail, attribute } from 'store/models';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Params } from 'lib/type';
import Detail from 'components/products/detail';

interface Props extends RouteComponentProps<Params> {
}

interface CartState {
}
class CartContainer extends React.Component<Props, CartState> {

  componentDidMount() {

  }

  render() {

    return (
      <>
        cart container
      </>
    );
  }
}

const mapStateToProps = (rootState: rootState) => ({

})

const mapDispatchToProps = (dispatch: Dispatch) => ({

});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);

export default withRouter(connectModule);