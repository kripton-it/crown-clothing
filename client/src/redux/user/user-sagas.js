import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user-action-types";

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure
} from "./user-actions";

import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser
} from "../../firebase/firebase.utils";

const {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  CHECK_USER_START,
  SIGN_OUT_START,
  SIGN_UP_START,
  SIGN_UP_SUCCESS
} = UserActionTypes;

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data()
      })
    );
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onEmailSignInStart({ payload }) {
  try {
    const { email, password } = payload;
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserStart() {
  try {
    const user = yield getCurrentUser();
    if (!user) return;
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onSignOutStart() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignUpStart({ payload }) {
  try {
    const { email, password, displayName } = payload;
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(
      signUpSuccess({
        user,
        additionalData: { displayName }
      })
    );
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signInAfterSignUp({ payload }) {
  try {
    const { user, additionalData } = payload;
    yield call(getSnapshotFromUserAuth, user, additionalData);
  } catch (error) {}
}

export function* googleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, onGoogleSignInStart);
}

export function* emailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, onEmailSignInStart);
}

export function* checkUserStart() {
  yield takeLatest(CHECK_USER_START, onCheckUserStart);
}

export function* signOutStart() {
  yield takeLatest(SIGN_OUT_START, onSignOutStart);
}

export function* signUpStart() {
  yield takeLatest(SIGN_UP_START, onSignUpStart);
}

export function* signInAfterSignUpSuccess() {
  yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp);
}

export default function* userSagas() {
  yield all([
    call(googleSignInStart),
    call(emailSignInStart),
    call(checkUserStart),
    call(signOutStart),
    call(signUpStart),
    call(signInAfterSignUpSuccess)
  ]);
}
