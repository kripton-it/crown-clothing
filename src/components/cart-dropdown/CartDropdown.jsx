import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart-selectors";

import "./CartDropdown.styles.scss";

import CartItem from "../cart-item/CartItem";

import CustomButton from "../custom-button/CustomButton";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
        {/* {cartItems.length ? cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        )) : <span classname="empty-message">Your cart is empty</span>} */}
      </div>
      <CustomButton>Go to checkout</CustomButton>
      {/*{cartItems.length ? <CustomButton>Go to checkout</CustomButton> : null} */}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
