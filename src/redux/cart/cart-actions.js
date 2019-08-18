import CartActionTypes from "./cart-action-types";

const { TOGGLE_CART_HIDDEN } = CartActionTypes;

export const toggleCartHiddenAction = () => ({
  type: TOGGLE_CART_HIDDEN,
});