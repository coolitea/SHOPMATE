import * as React from 'react';
import './Products.scss'
import { Responsive, Pagination } from 'components/common';
import { Product } from 'components';
import { product_lists, pager, categories } from 'store/models';
import { productAction } from 'store/actions';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Jumbo from 'components/home/HomeJumbotron';
interface Props extends RouteComponentProps{
  products: product_lists;
  pager: pager;
  setPage: typeof productAction.setPage;
  categories: categories[],
}

const Products: React.SFC<Props> = ({
  products,
  pager,
  setPage,
  categories,
  history
}) => (
    <Responsive>
      <div className="products">
        <Jumbo />
        <div className="first">
          <div className="attribute">
            <div className="top">
              <p>Filter items</p>
            </div>
            <div className="product_categories">
            <ul>
              {categories && categories.map((data, i) => (
                <div key={i} className="categories" onClick={()=> history.push(`/product/category/${data.category_id}`)}>{data.name}</div>
              ))}
              </ul>
            </div>
            <div className="buttons">
              <div className="color">

              </div>
              <div className="size">

              </div>
              <div className="price_range">

              </div>
            </div>
          </div>
          <div className="items" >
            {products && products.rows.map((product, index) => {
              return <Product product={product} key={index} />
            })}
          </div>
        </div>
        <Pagination pager={pager} setPage={setPage} />
      </div>
    </Responsive>
  );

export default withRouter(Products);