import { takeLatest, put, all, call } from "redux-saga/effects";

import { signInSuccess, signInFailure } from "./user-actions";

import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  CHECK_USER_START
} from "./user-action-types";

import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser
} from "../../firebase/firebase.utils";

function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
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

function* onGoogleSignInStart() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* onEmailSignInStart({ payload }) {
  try {
    const { email, password } = payload;
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* onCheckUserStart() {
  try {
    const user = yield getCurrentUser();
    if (!user) return;
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* googleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, onGoogleSignInStart);
}

function* emailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, onEmailSignInStart);
}

function* checkUserStart() {
  yield takeLatest(CHECK_USER_START, onCheckUserStart);
}

export default function* userSagas() {
  yield all([
    call(googleSignInStart),
    call(emailSignInStart),
    call(checkUserStart)
  ]);
}
