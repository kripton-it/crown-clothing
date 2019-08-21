import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  // price - в долларах
  // дляStripe нужна цена в центах
  const priceForStripe = 100 * price;
  const publishableKey = "pk_test_6R5VfQM3v9atCRklt4tqYsyu000P4GVSz4";

  const onToken = token => console.log(token);

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
