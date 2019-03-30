import * as React from 'react';
import './Products.scss'
import { Responsive, Pagination } from 'components/common';
import { Product } from 'components';
import { product_lists } from 'store/models';

interface Props {
  products: product_lists | null;
}

const Products: React.SFC<Props> = ({
  products,
}) => (
  <Responsive>
    <div className="products">
      <div className="first">
        <div className="attribute">
          <div className="top">
            <p>Filter 486 items</p>
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
          { products && products.rows.map((product, index) => {
            return <Product product={product} key={index}/>
          })}
        </div>
      </div>
      <Pagination />
    </div>
  </Responsive>
);

export default Products;