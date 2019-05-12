import * as React from "react";
import {
  CardElement,
  injectStripe,
  ReactStripeElements
} from "react-stripe-elements";
import { Button } from "components/common";
import { order } from "store/models";
import { stripeAction } from "store/actions";
import { async } from "q";

interface Props extends ReactStripeElements.InjectedStripeProps {
  currentorder: order;
  charge: typeof stripeAction.postChargeRequest;
}

const Form: React.SFC<Props> = ({ currentorder, charge, stripe }) => {
  const onSubmit = async () => {
    const data = stripe && await stripe.createToken({ name: "shopmate"});
    charge({
      // stripeToken: token.id,
      order_id: currentorder.order_id,
      description: '',
      amount: currentorder.total_amount
    })
  };
  return (
    <>
      <h3 className="title">Payment</h3>
      <CardElement className="card" />
      <Button className="medium1" onClick={() => onSubmit()}>Pay</Button>
    </>
  );
};

export default injectStripe(Form);
