import * as React from 'react';
import { rootState } from 'store/reducers';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps} from 'react-router-dom';
import { Params } from 'lib/type';
import { Products } from 'components';
import { productAction } from 'store/actions';

interface Props extends RouteComponentProps<Params>{
  getProduct: typeof productAction.productRequest;
  getProductByCategory: typeof productAction.productByCategoryRequest;
  getProductByDepartment: typeof productAction.productByDepartmentRequest;
}

interface ProductsState {

}

class ProductsContainer extends React.Component<Props, ProductsState> {
  componentWillMount() {
    switch(this.props.match.params.direction) {
      case 'category':
        this.props.getProductByCategory(this.props.match.params.id)
        break;
      case 'department':
        this.props.getProductByDepartment(this.props.match.params.id);
        break;
      default:
        this.props.getProduct(this.props.match.params.direction);
    }
  }
  componentDidUpdate(prevProps: Props) {
    if(prevProps === undefined) {
      return false;
    }
    if(prevProps.match.url !== this.props.match.url) {
      switch(this.props.match.params.direction) {
        case 'category':
          this.props.getProductByCategory(this.props.match.params.id)
          break;
        case 'department':
          this.props.getProductByDepartment(this.props.match.params.id);
          break;
        default:
          this.props.getProduct(this.props.match.params.direction);
      }
    }
  }
  render() {
    return (
      <>
        <Products />
      </>
    );
  }
}

const mapStateToProps = (rootState: rootState) => ({

})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getProduct: (id: string | undefined) => dispatch(productAction.productRequest(id)),
  getProductByCategory: (id: string | undefined) => dispatch(productAction.productByCategoryRequest(id)),
  getProductByDepartment: (id: string | undefined) => dispatch(productAction.productByDepartmentRequest(id)),
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);

export default withRouter(connectModule);