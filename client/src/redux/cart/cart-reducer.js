import CartActionTypes from "./cart-action-types";

import { addItemToCart, decreaseItemAmount } from "./cart-utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_AMOUNT,
  CLEAR_CART,
  SET_CART_FROM_FIREBASE
} = CartActionTypes;

const cartReducer = (state = INITIAL_STATE, action) => {
  const { hidden, cartItems } = state;
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !hidden
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(cartItems, action.payload)
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: cartItems.filter(({ id }) => id !== action.payload.id)
      };
    case DECREASE_AMOUNT:
      return {
        ...state,
        cartItems: decreaseItemAmount(cartItems, action.payload)
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    case SET_CART_FROM_FIREBASE:
      return {
        ...state,
        cartItems: action.payload
      };
    default:
      return state;
  }
};

export default cartReducer;
