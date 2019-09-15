import { takeLatest, put, select, call, all } from "redux-saga/effects";

import UserActiontypes from "../user/user-action-types";
import CartActiontypes from "./cart-action-types";

import { clearCart, setCartFromFirebase } from "./cart-actions";

import { selectCurrentUser } from "../user/user-selectors";
import { selectCartItems } from "./cart-selectors";

import { getUserCartRef } from "../../firebase/firebase.utils";

import cartSagas, {
  clearCartAfterSignOutSuccess,
  updateCartInFirebase,
  checkCartFromFirebase,
  signOutSuccess,
  onUserSignIn,
  onCartChange
} from "./cart-sagas";

const { SIGN_OUT_SUCCESS, SIGN_IN_SUCCESS } = UserActiontypes;
const { ADD_ITEM, REMOVE_ITEM, DECREASE_AMOUNT, CLEAR_CART } = CartActiontypes;

describe("cartSagas", () => {
  it("should watch signOutSuccess, onCartChange, onUserSignIn", () => {
    const generator = cartSagas();
    expect(generator.next().value).toEqual(
      all([call(signOutSuccess), call(onCartChange), call(onUserSignIn)])
    );
  });
});

describe("onCartChange saga", () => {
  it("should trigger on any cart action", () => {
    const generator = onCartChange();
    expect(generator.next().value).toEqual(
      takeLatest(
        [ADD_ITEM, REMOVE_ITEM, DECREASE_AMOUNT, CLEAR_CART],
        updateCartInFirebase
      )
    );
  });
});

describe("updateCartInFirebase saga", () => {
  const generator = updateCartInFirebase();

  it("should fire select(selectCurrentUser)", () => {
    expect(generator.next().value).toEqual(select(selectCurrentUser));
  });

  it("should fire getUserCartRef(currentUser.id)", () => {
    const mockUser = {
      id: 1
    };
    expect(generator.next(mockUser).value).toEqual(getUserCartRef(mockUser.id));
  });

  const mockCartRef = {
    update: jest.fn()
  };

  it("should fire select(selectCartItems)", () => {
    expect(generator.next(mockCartRef).value).toEqual(select(selectCartItems));
  });

  it("should fire cartRef.update({ cartItems })", () => {
    const mockCartItems = [];
    expect(generator.next(mockCartItems).value).toEqual(
      mockCartRef.update({ mockCartItems })
    );
  });

  /* it("should fire console.log if updateCartInFirebase fails at any point", () => {
    const newGenerator = updateCartInFirebase();
    const error = {
      message: "error"
    };
    newGenerator.throw(error);
    expect(console.log).toHaveBeenCalledWith(error);
  }); */
});

describe("onUserSignIn saga", () => {
  it("should fire checkCartFromFirebase", () => {
    const generator = onUserSignIn();
    expect(generator.next().value).toEqual(
      takeLatest(SIGN_IN_SUCCESS, checkCartFromFirebase)
    );
  });
});

describe("checkCartFromFirebase saga", () => {
  const user = {
    id: 1
  };
  const generator = checkCartFromFirebase({ payload: user });

  it("should call getUserCartRef", () => {
    expect(generator.next().value).toEqual(getUserCartRef(user.id));
  });

  it("should call cartRef.get()", () => {
    const mockCartRef = {
      get: jest.fn()
    };
    expect(generator.next(mockCartRef).value).toEqual(mockCartRef.get());
  });

  it("should fire setCartFromFirebase", () => {
    const mockSnapshot = {
      data: () => ({
        cartItems: []
      })
    };
    expect(generator.next(mockSnapshot).value).toEqual(
      put(setCartFromFirebase(mockSnapshot.data().cartItems))
    );
  });
});

describe("signOutSuccess saga", () => {
  it("should trigger on SIGN_OUT_SUCCESS", () => {
    const generator = signOutSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(SIGN_OUT_SUCCESS, clearCartAfterSignOutSuccess)
    );
  });
});

describe("clearCartAfterSignOutSuccess saga", () => {
  const generator = clearCartAfterSignOutSuccess();

  it("should fire clearCart", () => {
    expect(generator.next().value).toEqual(put(clearCart()));
  });
});
