import * as React from 'react';
import './Product.scss'
import { products } from 'store/models';
import { Button } from 'components/common';
import { withRouter, RouteComponentProps} from 'react-router-dom';

interface Props extends RouteComponentProps{
  product: products;
}

const Product: React.SFC<Props> = ({
  product,
  history,
}) => {
  return (
    <div className="product">
      <img src={`${process.env.REACT_APP_IMAGE_URL}${product.thumbnail}`}/>
      <p className="title">{product.name}</p>
      <p className="price">$ {product.price}</p>
      <Button
        className="small1"
        onClick={()=>history.push(`/detail/${product.product_id}`)}
      >
        Show
      </Button>
    </div>
  )
}

export default withRouter(Product);