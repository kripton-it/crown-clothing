import { takeLatest, put, all, call } from "redux-saga/effects";

import { clearCart } from "./cart-actions";

import { SIGN_OUT_SUCCESS } from "./user-action-types";

function* clearCartAfterSignOutSuccess() {
  yield put(clearCart());
}

function* signOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartAfterSignOutSuccess);
}

export default function* cartSagas() {
  yield all([call(signOutSuccess)]);
}
