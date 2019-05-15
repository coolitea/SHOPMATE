import * as React from "react";
import {
  CardElement,
  injectStripe,
  ReactStripeElements
} from "react-stripe-elements";
import { Button } from "components/common";
import { order, customer } from "store/models";
import { stripeAction } from "store/actions";
import { async } from "q";
import storage from "lib/storage";
interface Props extends ReactStripeElements.InjectedStripeProps {
  currentorder: order;
  charge: typeof stripeAction.postChargeRequest;
  user: customer;
  total: string;
}

const Form: React.SFC<Props> = ({
  currentorder,
  charge,
  user,
  stripe,
  total
}) => {
  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let token = stripe && (await stripe.createToken({ name: "shopmate" }));
      token && token.token
        ? charge({
            stripeToken: token.token,
            order_id: currentorder.order_id,
            description: "shopmate checkout",
            amount: parseInt(total) * 100
          })
        : "";
    } catch (e) {
      throw e;
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <h3 className="title">Payment</h3>
      <CardElement className="card" />
      <Button className="medium1">Pay</Button>
    </form>
  );
};

export default injectStripe(Form);
