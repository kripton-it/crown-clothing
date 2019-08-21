import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHiddenAction } from "../../redux/cart/cart-actions";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";

import { CartIconContainer, ShoppingIcon, ItemsCount } from "./CartIconStyles";

const CartIcon = ({ toggleCartHidden, itemsCount }) => {
  return (
    <CartIconContainer onClick={() => itemsCount && toggleCartHidden()}>
      <ShoppingIcon />
      <ItemsCount>{itemsCount}</ItemsCount>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHiddenAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
