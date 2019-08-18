import CartActionTypes from "./cart-action-types";

const { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM } = CartActionTypes;

export const toggleCartHiddenAction = () => ({
  type: TOGGLE_CART_HIDDEN
});

export const addItemToCartAction = item => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItemFromCartAction = id => ({
  type: REMOVE_ITEM,
  payload: id
});
