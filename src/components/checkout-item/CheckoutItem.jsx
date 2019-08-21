import React from "react";

import { connect } from "react-redux";

import {
  addItemToCartAction,
  removeItemFromCartAction,
  decreaseAmountAction
} from "../../redux/cart/cart-actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  ItemName,
  ItemQuantityContainer,
  ItemQuantityArrow,
  ItemQuantityValue,
  ItemPrice,
  RemoveButton
} from "./CheckoutItemStyles";

const CheckoutItem = ({
  cartItem,
  removeItem,
  addItemToCart,
  decreaseAmount
}) => {
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <ItemName>{name}</ItemName>
      <ItemQuantityContainer>
        <ItemQuantityArrow onClick={() => decreaseAmount(cartItem)}>
          &#10094;
        </ItemQuantityArrow>
        <ItemQuantityValue>{quantity}</ItemQuantityValue>
        <ItemQuantityArrow onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </ItemQuantityArrow>
      </ItemQuantityContainer>
      <ItemPrice>{price}</ItemPrice>
      <RemoveButton className onClick={() => removeItem(cartItem)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItemFromCartAction(item)),
  decreaseAmount: item => dispatch(decreaseAmountAction(item)),
  addItemToCart: item => dispatch(addItemToCartAction(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
