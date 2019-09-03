import React from "react";

import { CartIconContainer, ShoppingIcon, ItemsCount } from "./CartIconStyles";

const CartIcon = ({ toggleCartHidden, itemsCount, location }) => {
  return (
    <CartIconContainer
      onClick={() =>
        location.pathname !== "/checkout" && itemsCount && toggleCartHidden()
      }
    >
      <ShoppingIcon />
      <ItemsCount>{itemsCount}</ItemsCount>
    </CartIconContainer>
  );
};

export default CartIcon;
