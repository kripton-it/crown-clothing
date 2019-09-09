import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  // price - в долларах
  // дляStripe нужна цена в центах
  const priceForStripe = 100 * price;
  const publishableKey = "pk_test_6R5VfQM3v9atCRklt4tqYsyu000P4GVSz4";

  const onToken = async token => {
    const stripeConfig = {
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    };
    try {
      await axios(stripeConfig);
      alert("Payment successful");
    } catch (error) {
      console.error("Payment error: ", JSON.parse(error));
      alert(
        "There was an issue with your payment. Please sure you use the provided credit card"
      );
    }
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
