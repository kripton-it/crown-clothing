import CartActionTypes from "./cart-action-types";

const { TOGGLE_CART_HIDDEN, ADD_ITEM } = CartActionTypes;

export const toggleCartHiddenAction = () => ({
  type: TOGGLE_CART_HIDDEN
});

export const addItemToCartAction = item => ({
  type: ADD_ITEM,
  payload: item
});
