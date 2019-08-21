import React from "react";

import {
  CartItemContainer,
  ItemsDetails,
  ItemName,
  ItemPrice
} from "./CartItemStyles";

const CartItem = ({ item }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemsDetails>
        <ItemName>{name}</ItemName>
        <ItemPrice>{`${quantity} x $${price}`}</ItemPrice>
      </ItemsDetails>
    </CartItemContainer>
  );
};

export default CartItem;
