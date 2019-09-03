import React from "react";

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
export default CartDropdown;
