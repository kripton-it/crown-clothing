import React from "react";
import { connect } from "react-redux";

import { toggleCartHiddenAction } from "../../redux/cart/cart-actions";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./CartIcon.styles.scss";

const CartIcon = ({ toggleCartHidden, cartItems }) => {
  const count = cartItems
    .map(({ quantity }) => quantity)
    .reduce((acc, item) => acc + item, 0);

  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHiddenAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
