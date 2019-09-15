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

import userSagas, {
  getSnapshotFromUserAuth,
  onGoogleSignInStart,
  onEmailSignInStart,
  onCheckUserStart,
  onSignOutStart,
  onSignUpStart,
  signInAfterSignUp,
  googleSignInStart,
  emailSignInStart,
  checkUserStart,
  signOutStart,
  signUpStart,
  signInAfterSignUpSuccess
} from "./user-sagas";

const {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  CHECK_USER_START,
  SIGN_OUT_START,
  SIGN_UP_START,
  SIGN_UP_SUCCESS
} = UserActionTypes;

describe("getSnapshotFromUserAuth saga", () => {
  const mockUserAuth = {};
  const mockAdditionalData = {};
  const generator = getSnapshotFromUserAuth(mockUserAuth, mockAdditionalData);

  it("should fire createUserProfileDocument", () => {
    expect(generator.next().value).toEqual(
      call(createUserProfileDocument, mockUserAuth, mockAdditionalData)
    );
  });

  it("should fire userRef.get", () => {
    const userRef = {
      get: jest.fn()
    };
    expect(generator.next(userRef).value).toEqual(userRef.get());
  });

  it("should fire signInSuccess", () => {
    const userSnapshot = {
      id: 123,
      data: () => ({})
    };
    expect(generator.next(userSnapshot).value).toEqual(
      put(
        signInSuccess({
          id: userSnapshot.id,
          ...userSnapshot.data()
        })
      )
    );
  });

  it("should fire signInFailure if getSnapshotFromUserAuth fails at any point", () => {
    const newGenerator = getSnapshotFromUserAuth(
      mockUserAuth,
      mockAdditionalData
    );
    newGenerator.next();
    const error = { message: "error" };
    expect(newGenerator.throw(error).value).toEqual(put(signInFailure(error)));
  });
});

describe("googleSignInStart saga", () => {
  it("should trigger on GOOGLE_SIGN_IN_START action", () => {
    const generator = googleSignInStart();
    expect(generator.next().value).toEqual(
      takeLatest(GOOGLE_SIGN_IN_START, onGoogleSignInStart)
    );
  });
});

describe("onGoogleSignInStart saga", () => {
  const generator = onGoogleSignInStart();

  it("should fire auth.signInWithPopup", () => {
    expect(generator.next().value).toEqual(
      auth.signInWithPopup(googleProvider)
    );
  });

  it("should fire getSnapshotFromUserAuth", () => {
    const user = {
      id: 123
    };
    expect(generator.next({ user }).value).toEqual(
      getSnapshotFromUserAuth(user)
    );
  });

  it("should fire signInFailure if onGoogleSignInStart fails at any point", () => {
    const newGenerator = onGoogleSignInStart();
    newGenerator.next();
    const error = { message: "error" };
    expect(newGenerator.throw(error).value).toEqual(put(signInFailure(error)));
  });
});

describe("emailSignInStart saga", () => {
  it("should trigger on EMAIL_SIGN_IN_START action", () => {
    const generator = emailSignInStart();
    expect(generator.next().value).toEqual(
      takeLatest(EMAIL_SIGN_IN_START, onEmailSignInStart)
    );
  });
});

describe("onEmailSignInStart saga", () => {
  const payload = {
    email: "qwerty@mail.ru",
    password: "12345"
  };
  const generator = onEmailSignInStart({ payload });

  it("should fire auth.signInWithEmailAndPassword", () => {
    expect(generator.next().value).toEqual(
      auth.signInWithEmailAndPassword(payload.email, payload.password)
    );
  });

  it("should fire getSnapshotFromUserAuth", () => {
    const user = {
      id: 123
    };
    expect(generator.next({ user }).value).toEqual(
      getSnapshotFromUserAuth(user)
    );
  });

  it("should fire signInFailure if onEmailSignInStart fails at any point", () => {
    const newGenerator = onEmailSignInStart({ payload });
    newGenerator.next();
    const error = { message: "error" };
    expect(newGenerator.throw(error).value).toEqual(put(signInFailure(error)));
  });
});

describe("checkUserStart saga", () => {
  it("should trigger on CHECK_USER_START action", () => {
    const generator = checkUserStart();
    expect(generator.next().value).toEqual(
      takeLatest(CHECK_USER_START, onCheckUserStart)
    );
  });
});

describe("onCheckUserStart saga", () => {
  const generator = onCheckUserStart();

  it("should fire getCurrentUser", () => {
    expect(generator.next().value).toEqual(getCurrentUser());
  });

  it("should fire getSnapshotFromUserAuth", () => {
    const user = {
      id: 123
    };
    expect(generator.next(user).value).toEqual(getSnapshotFromUserAuth(user));
  });

  it("should fire signInFailure if onCheckUserStart fails at any point", () => {
    const newGenerator = onCheckUserStart();
    newGenerator.next();
    const error = { message: "error" };
    expect(newGenerator.throw(error).value).toEqual(put(signInFailure(error)));
  });
});

describe("signOutStart saga", () => {
  it("should trigger on SIGN_OUT_START action", () => {
    const generator = signOutStart();
    expect(generator.next().value).toEqual(
      takeLatest(SIGN_OUT_START, onSignOutStart)
    );
  });
});

describe("onSignOutStart saga", () => {
  const generator = onSignOutStart();

  it("should fire auth.signOut", () => {
    const expectSignOut = jest.spyOn(auth, "signOut");
    generator.next();
    expect(expectSignOut).toHaveBeenCalled();
  });

  it("should fire signOutSuccess", () => {
    expect(generator.next().value).toEqual(put(signOutSuccess()));
  });

  it("should fire signOutFailure if onSignOutStart fails at any point", () => {
    const newGenerator = onSignOutStart();
    newGenerator.next();
    const error = { message: "error" };
    expect(newGenerator.throw(error).value).toEqual(put(signOutFailure(error)));
  });
});

describe("signUpStart saga", () => {
  it("should trigger on SIGN_UP_START action", () => {
    const generator = signUpStart();
    expect(generator.next().value).toEqual(
      takeLatest(SIGN_UP_START, onSignUpStart)
    );
  });
});

describe("onSignUpStart saga", () => {
  const payload = {
    email: "qwerty@mail.ru",
    password: "12345",
    displayName: "qwerty"
  };
  const generator = onSignUpStart({ payload });

  it("should fire auth.createUserWithEmailAndPassword", () => {
    expect(generator.next().value).toEqual(
      auth.createUserWithEmailAndPassword(payload.email, payload.password)
    );
  });

  it("should fire signUpSuccess", () => {
    const user = {
      id: 123
    };
    expect(generator.next({ user }).value).toEqual(
      put(
        signUpSuccess({
          user,
          additionalData: { displayName: payload.displayName }
        })
      )
    );
  });

  it("should fire signUpFailure if onSignUpStart fails at any point", () => {
    const newGenerator = onSignUpStart({ payload });
    newGenerator.next();
    const error = { message: "error" };
    expect(newGenerator.throw(error).value).toEqual(put(signUpFailure(error)));
  });
});

describe("signInAfterSignUpSuccess saga", () => {
  it("should trigger on SIGN_UP_SUCCESS action", () => {
    const generator = signInAfterSignUpSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp)
    );
  });
});

describe("signInAfterSignUp saga", () => {
  const payload = {
    user: { id: 1 },
    additionalData: {}
  };
  const generator = signInAfterSignUp({ payload });

  it("should fire getSnapshotFromUserAuth", () => {
    expect(generator.next().value).toEqual(
      call(getSnapshotFromUserAuth, payload.user, payload.additionalData)
    );
  });
});

describe("userSagas", () => {
  it("should watch all sagas", () => {
    const generator = userSagas();
    expect(generator.next().value).toEqual(
      all([
        call(googleSignInStart),
        call(emailSignInStart),
        call(checkUserStart),
        call(signOutStart),
        call(signUpStart),
        call(signInAfterSignUpSuccess)
      ])
    );
  });
});
