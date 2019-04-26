import * as React from "react";
import "./Detail.scss";
import {
  Responsive,
  StarRating,
  ColorPicker,
  SizePicker,
  Button
} from "components/common";
import { attribute, review, products_detail } from "store/models";
import Review from "./Review";

interface Props {
  reviews: review[];
  details: products_detail;
  star: number;
  colors: attribute[];
  sizes: attribute[];
  quantity: number;
  onChangequantity: (quantity: number) => void;
}

const Detail: React.SFC<Props> = ({
  reviews,
  details,
  star,
  colors,
  sizes,
  quantity,
  onChangequantity
}) => {
  return (
    <Responsive>
      <div className="detail_container">
        <div className="detail">
          <div className="images">
            <img src={`${process.env.REACT_APP_IMAGE_URL}${details.image}`} />
            <div className="cards">
              <img src={`${process.env.REACT_APP_IMAGE_URL}${details.image}`} />
              <img
                src={`${process.env.REACT_APP_IMAGE_URL}${details.image_2}`}
              />
            </div>
          </div>

          <div className="contents">
            <StarRating totalStar={5} starsSelected={star} show={true} />
            <h3 className="title">{details.name}</h3>
            <div className="price">${details.price}</div>
            <div className="color">
              <div>Color</div>
              <ColorPicker color={colors} />
            </div>
            <div className="size">
              <div>Size</div>
              <SizePicker size={sizes} />
            </div>
            <div className="quantity">
              <div>Quantity</div>
              <div className="container">
                <div
                  className="minus"
                  onClick={() => onChangequantity(quantity - 1)}
                >
                  <div />
                </div>
                <div className="content">{quantity}</div>
                <div
                  className="plus"
                  onClick={() => onChangequantity(quantity + 1)}
                >
                  <div />
                  <div />
                </div>
              </div>
            </div>
            <Button className="medium1">Add to cart</Button>
          </div>
        </div>
        <div className="reviews">
          <h3>Product reviews</h3>
          {reviews.map((review, i) => (
            <Review
              key={i}
              name={review.name}
              rating={review.rating}
              review={review.review}
            />
          ))}
        </div>
      </div>
    </Responsive>
  );
};

export default Detail;
