import React from "react";

import CheckoutItemContainer from "../../components/checkout-item/CheckoutItemContainer";
import StripeCheckoutButton from "../../components/stripe-button/StripeButton";

import {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderItem,
  TotalContainer,
  WarningText
} from "./CheckoutPageStyles";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeader>
        <HeaderItem>
          <span>Product</span>
        </HeaderItem>
        <HeaderItem>
          <span>Description</span>
        </HeaderItem>
        <HeaderItem>
          <span>Quantity</span>
        </HeaderItem>
        <HeaderItem>
          <span>Price</span>
        </HeaderItem>
        <HeaderItem>
          <span>Remove</span>
        </HeaderItem>
      </CheckoutHeader>
      {cartItems.map(cartItem => (
        <CheckoutItemContainer key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>
        <span>Total: ${total}</span>
      </TotalContainer>
      <WarningText>
        *Please use the following test credit card for payments*
        <br />
        4242 42424 4242 4242 - Exp: 01/20 - CVV: 123
      </WarningText>
      <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
