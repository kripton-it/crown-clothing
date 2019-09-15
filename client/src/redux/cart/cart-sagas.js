import { takeLatest, put, all, call, select } from "redux-saga/effects";
import UserActiontypes from "../user/user-action-types";
import CartActiontypes from "./cart-action-types";

import { clearCart, setCartFromFirebase } from "./cart-actions";

import { selectCurrentUser } from "../user/user-selectors";
import { selectCartItems } from "./cart-selectors";

import { getUserCartRef } from "../../firebase/firebase.utils";

const { SIGN_OUT_SUCCESS, SIGN_IN_SUCCESS } = UserActiontypes;
const { ADD_ITEM, REMOVE_ITEM, DECREASE_AMOUNT, CLEAR_CART } = CartActiontypes;

export function* clearCartAfterSignOutSuccess() {
  yield put(clearCart());
}

export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

export function* signOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartAfterSignOutSuccess);
}

export function* onUserSignIn() {
  yield takeLatest(SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* onCartChange() {
  yield takeLatest(
    [ADD_ITEM, REMOVE_ITEM, DECREASE_AMOUNT, CLEAR_CART],
    updateCartInFirebase
  );
}

export default function* cartSagas() {
  yield all([call(signOutSuccess), call(onCartChange), call(onUserSignIn)]);
}
