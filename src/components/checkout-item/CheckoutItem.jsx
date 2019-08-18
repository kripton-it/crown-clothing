import React from "react";

import { connect } from "react-redux";

import {
  addItemToCartAction,
  removeItemFromCartAction,
  decreaseAmountAction
} from "../../redux/cart/cart-actions";

import "./CheckoutItem.styles.scss";

const CheckoutItem = ({ cartItem, removeItem, addItemToCart, decreaseAmount }) => {
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div
          className="arrow"
          onClick={() => decreaseAmount(cartItem)}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </div>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
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
