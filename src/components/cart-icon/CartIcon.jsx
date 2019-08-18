import React from "react";
import { connect } from "react-redux";

import { toggleCartHiddenAction } from "../../redux/cart/cart-actions";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./CartIcon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemsCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="items-count">{itemsCount}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  itemsCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHiddenAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
