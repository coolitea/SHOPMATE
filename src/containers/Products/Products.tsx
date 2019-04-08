import * as React from 'react';
import { rootState } from 'store/reducers';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Params } from 'lib/type';
import { Products } from 'components';
import { productAction, categoryAction } from 'store/actions';
import { product_lists, pager, categories } from 'store/models';

interface Props extends RouteComponentProps<Params> {
  getProduct: typeof productAction.productRequest;
  getProductByCategory: typeof productAction.productByCategoryRequest;
  getProductByDepartment: typeof productAction.productByDepartmentRequest;
  setPage: typeof productAction.setPage;
  products: product_lists;
  pager: pager;
  currentpage: number;
  categories: categories[];
  getCategories: typeof categoryAction.categoryRequest;
}

class ProductsContainer extends React.Component<Props> {
  componentWillMount() {
    switch (this.props.match.params.direction) {
      case 'category':
        this.props.setPage(1);
        this.props.getProductByCategory(this.props.match.params.id);
        break;
      case 'department':
        this.props.setPage(1);
        this.props.getProductByDepartment(this.props.match.params.id);
        break;
      default:
        this.props.setPage(1);
        this.props.getProduct(this.props.match.params.direction);
    }
  }
  componentDidMount() {
    this.props.getCategories('');
  }
  componentDidUpdate(prevProps: Props) {
    if (prevProps === undefined) {
      return false;
    }
    if (prevProps.match.url !== this.props.match.url) {
      switch (this.props.match.params.direction) {
        case 'category':
          this.props.getProductByCategory(this.props.match.params.id);
          this.props.setPage(1);
          break;
        case 'department':
          this.props.getProductByDepartment(this.props.match.params.id);
          this.props.setPage(1);
          break;
        default:
          this.props.getProduct(this.props.match.params.direction);
          this.props.setPage(1);
      }
    } else if (prevProps.currentpage !== this.props.currentpage) {
      switch (this.props.match.params.direction) {
        case 'category':
          this.props.getProductByCategory(this.props.match.params.id, this.props.currentpage);
          break;
        case 'department':
          this.props.getProductByDepartment(this.props.match.params.id, this.props.currentpage);
          break;
        default:
          this.props.getProduct(this.props.match.params.direction, this.props.currentpage);
      }
    }
  }

  render() {
    const { products, pager, setPage, categories } = this.props;
    return (
      <>
        <Products
          products={products}
          pager={pager}
          setPage={setPage}
          categories={categories}
        />
      </>
    );
  }
}

const mapStateToProps = (rootState: rootState) => {
  return {
    products: rootState.product.products,
    pager: rootState.product.pager,
    currentpage: rootState.product.currentPage,
    categories: rootState.categories.rows,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getProduct: (id?: string, page?: number) => dispatch(productAction.productRequest(id, page)),
  getProductByCategory: (id?: string, page?: number) => dispatch(productAction.productByCategoryRequest(id, page)),
  getProductByDepartment: (id?: string, page?: number) => dispatch(productAction.productByDepartmentRequest(id, page)),
  setPage: (currentpage: number) => dispatch(productAction.setPage(currentpage)),
  getCategories: (id: string | null) => dispatch(categoryAction.categoryRequest(id)),
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);

export default withRouter(connectModule);