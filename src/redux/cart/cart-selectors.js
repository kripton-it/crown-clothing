import { createSelector } from "reselect";

const selectCart = state => state.cart;

// внутри реализована мемоизация
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((count, { quantity }) => count + quantity, 0)
);

/*
Логика - снизу вверх и обратно:
внизу [selectCartItems] -> выше [selectCart] -> наверху selectCart возвращает cart
обратно: cart возвращает cartItems, в самом низу cartItems возвращает itemsCount
*/

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);
