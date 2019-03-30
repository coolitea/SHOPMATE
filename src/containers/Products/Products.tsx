import * as React from 'react';
import { rootState } from 'store/reducers';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps} from 'react-router-dom';
import { Params } from 'lib/type';
import { Products } from 'components';
import { productAction } from 'store/actions';
import { product_lists } from 'store/models';

interface Props extends RouteComponentProps<Params>{
  getProduct: typeof productAction.productRequest;
  getProductByCategory: typeof productAction.productByCategoryRequest;
  getProductByDepartment: typeof productAction.productByDepartmentRequest;
  products: product_lists | null;
}

interface ProductsState {
  initialPage: number;
  pageSize: number;
  pager: {
    totalItems?: number;
    currentPage?: number;
    pageSize?: number;
    totalPages?: number;
    startPage?: number;
    endPage?: number;
    startIndex?: number;
    endIndex?: number;
    pages?: number[];
  }
}

class ProductsContainer extends React.Component<Props, ProductsState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      initialPage: 1,
      pageSize: 10,
      pager: {},
    }
    this.setPage = this.setPage.bind(this);
    this.getPager = this.getPager.bind(this);
  }
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

  setPage(page: number) {
    if(page < 1) {
      return;
    }
  }

  getPager(totalitems: number, currentPage: number, pagesize: number) {

  }

  render() {
    const { products } = this.props;
    return (
      <>
        <Products
          products={products}
        />
      </>
    );
  }
}

const mapStateToProps = (rootState: rootState) => {
  return {
    products: rootState.product.products,
  }
}

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