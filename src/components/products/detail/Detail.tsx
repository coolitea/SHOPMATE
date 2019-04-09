import * as React from 'react';
import './Detail.scss';
import { Responsive, StarRating, ColorPicker } from 'components/common';
import { attribute, review, products_detail } from 'store/models';

interface Props {
  reviews: review[];
  details: products_detail;
  star: number;
  colors: attribute[];
  sizes: attribute[];
}

const Detail: React.SFC<Props> = ({
  reviews,
  details,
  star,
  colors,
  sizes,
}) => {
  return (
    <Responsive>
      <div className="detail_container">
        <div className="detail">

          <div className="images">
            <img src={`${process.env.REACT_APP_IMAGE_URL}${details.image}`}/>
            <div className="cards">
              <img src={`${process.env.REACT_APP_IMAGE_URL}${details.image}`}/>
              <img src={`${process.env.REACT_APP_IMAGE_URL}${details.image_2}`}/>
            </div>
          </div>

          <div className="contents">
            <StarRating
              totalStar={5}
              starsSelected={star}
              show={true}
            />
            <h3 className="title">{details.name}</h3>
            <div className="price">${details.price}</div>
            <div className="color">
              <div>Color</div>
              <ColorPicker
                color={colors}
              />
            </div>
            <div className="size">
              <div>Size</div>
            </div>
            <div className="quantity">
              <div>Quantity</div>
            </div>
            
          </div>
        </div>
        <div className="reviews">

        </div>
      </div>
    </Responsive>
  );
}

export default Detail;