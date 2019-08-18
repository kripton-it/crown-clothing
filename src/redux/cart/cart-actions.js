import CartActionTypes from "./cart-action-types";

const {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_AMOUNT
} = CartActionTypes;

// переключение корзины (открыта/закрыта)
export const toggleCartHiddenAction = () => ({
  type: TOGGLE_CART_HIDDEN
});

// добавление товара в корзину
export const addItemToCartAction = item => ({
  type: ADD_ITEM,
  payload: item
});

// удаление товара из корзины
export const removeItemFromCartAction = item => ({
  type: REMOVE_ITEM,
  payload: item
});

// уменьшение количества товара на 1
export const decreaseAmountAction = item => ({
  type: DECREASE_AMOUNT,
  payload: item
});
