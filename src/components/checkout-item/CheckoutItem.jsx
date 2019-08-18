import React from "react";

import { connect } from "react-redux";

import { removeItemFromCartAction } from "../../redux/cart/cart-actions";

import "./CheckoutItem.styles.scss";

const CheckoutItem = ({ cartItem, removeItem }) => {
  const { imageUrl, name, price, quantity, id } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(id)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItemFromCartAction(id))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
