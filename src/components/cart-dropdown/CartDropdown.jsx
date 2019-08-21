import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart-selectors";
import { toggleCartHiddenAction } from "../../redux/cart/cart-actions";

import {
  CartDropdownContainer,
  CartItemsContainer
} from "./CartDropdownStyles";

import CartItem from "../cart-item/CartItem";

import CustomButton from "../custom-button/CustomButton";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </CartItemsContainer>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHiddenAction());
        }}
      >
        Go to checkout
      </CustomButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

// именно в таком порядке
// чтобы иметь доступ к свойствам
// history, match, location
// внутри mapStateToProps
export default withRouter(connect(mapStateToProps)(CartDropdown));
