import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart-selectors";
import { toggleCartHiddenAction } from "../../redux/cart/cart-actions";

import "./CartDropdown.styles.scss";

import CartItem from "../cart-item/CartItem";

import CustomButton from "../custom-button/CustomButton";

const CartDropdown = ({ cartItems, history, dispatch }) => {
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
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHiddenAction())
        }}
      >
        Go to checkout
      </CustomButton>
      {/*{cartItems.length ? <CustomButton>Go to checkout</CustomButton> : null} */}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

/* const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHiddenAction())
}); */

// именно в таком порядке
// чтобы иметь доступ к свойствам
// history, match, location
// внутри mapStateToProps
export default withRouter(connect(mapStateToProps)(CartDropdown));
