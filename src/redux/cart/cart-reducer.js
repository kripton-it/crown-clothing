import CartActionTypes from "./cart-action-types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const { TOGGLE_CART_HIDDEN, ADD_ITEM } = CartActionTypes;

const cartReducer = (state = INITIAL_STATE, action) => {
  const {hidden, cartItems} = state;
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !hidden
      };
      case ADD_ITEM:
      return {
        ...state,
        cartItems: [...cartItems, action.payload]
      };
    default:
      return state;
  }
};

export default cartReducer;
