import React from "react";
import { connect } from "react-redux";

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
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
