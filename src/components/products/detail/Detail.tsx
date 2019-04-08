import * as React from 'react';
import './Detail.scss';
import { Responsive } from 'components/common';
import { attribute, review, products_detail } from 'store/models';

interface Props {
  attributes: attribute[];
  reviews: review[];
  details: products_detail;
}

const Detail: React.SFC<Props> = ({
  attributes,
  reviews,
  details,
}) => {
  return (
    <Responsive>
      Detail component
    </Responsive>
  );
}

export default Detail;