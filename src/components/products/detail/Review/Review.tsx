import * as React from 'react';
import './Review.scss';
import { StarRating } from 'components/common';

interface Props {
  name: string;
  review: string;
  rating: number;
}

const Review: React.SFC<Props> = ({
  name,
  review,
  rating,
}) => {
  return (
    <div className="review">
      <div className="left">
        <StarRating
          starsSelected={rating}
          show={true}
        />
        <div className="name">
          {name}
        </div>
      </div>
      <div className="right">
        {review}
      </div>
    </div>
  )
}

export default Review;