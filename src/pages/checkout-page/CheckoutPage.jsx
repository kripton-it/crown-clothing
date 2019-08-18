import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotalPrice
} from "../../redux/cart/cart-selectors";

import "./CheckoutPage.styles.scss";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-item">
          <span>Product</span>
        </div>
        <div className="header-item">
          <span>Description</span>
        </div>
        <div className="header-item">
          <span>Quantity</span>
        </div>
        <div className="header-item">
          <span>Price</span>
        </div>
        <div className="header-item">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => cartItem.name)}
      <div className="total"><span>Total: ${total}</span></div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);
