import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActiontypes from "../user/user-action-types";

import { clearCart } from "./cart-actions";

const { SIGN_OUT_SUCCESS } = UserActiontypes;

export function* clearCartAfterSignOutSuccess() {
  yield put(clearCart());
}

export function* signOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartAfterSignOutSuccess);
}

export default function* cartSagas() {
  yield all([call(signOutSuccess)]);
}
