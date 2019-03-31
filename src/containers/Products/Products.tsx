import * as React from 'react';
import { rootState } from 'store/reducers';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps} from 'react-router-dom';
import { Params } from 'lib/type';
import { Products } from 'components';
import { productAction } from 'store/actions';
import { product_lists } from 'store/models';
import * as _ from 'underscore';

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
      pageSize: 20,
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
    let { pageSize, pager } = this.state;
    let { products } = this.props;
    if(page < 1 ) {
      return;
    }
    // get new pager object for specified page
    // pager = this.getPager(products.count, page, pageSize)
  }

  getPager(totalitems: number, currentpage: number, pagesize: number) {
    // default first page
    currentpage = currentpage || 1;
    // default page size is 20
    pagesize = pagesize || 20;
    // calculate total pages
    const totalPages = Math.ceil(totalitems / pagesize);
    let startPage, endPage;
    if(totalPages <= 10) {
      // less than 10 total pages than show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages than calculate start and end pages
      if(currentpage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if ( currentpage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentpage - 5;
        endPage = currentpage + 4;
      }
    }
    // caculate start and end item indexes
    const startIndex = (currentpage - 1) * pagesize;
    const endIndex = Math.min(startIndex + pagesize -1, totalitems -1);

    // create an array of pages
    const pages = _.range(startPage, endPage + 1);
    return {
      totalitems,
      currentpage,
      pagesize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages,
    }
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