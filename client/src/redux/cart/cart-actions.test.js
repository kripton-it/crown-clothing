import CartActionTypes from "./cart-action-types";

import * as CartActions from "./cart-actions";

const {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_AMOUNT,
  CLEAR_CART,
  SET_CART_FROM_FIREBASE,
  UPDATE_CART_IN_FIREBASE
} = CartActionTypes;

const {
  toggleCartHiddenAction,
  addItemToCartAction,
  removeItemFromCartAction,
  decreaseAmountAction,
  clearCart,
  setCartFromFirebase,
  updateCartInFirebase
} = CartActions;

describe("should create actions for cart:", () => {
  it("to toggle cart hidden", () => {
    expect(toggleCartHiddenAction().type).toEqual(TOGGLE_CART_HIDDEN);
  });

  it("to add item to cart", () => {
    const item = {
      field1: "hello",
      field2: 10
    };

    const action = addItemToCartAction(item);

    expect(action.type).toEqual(ADD_ITEM);
    expect(action.payload).toEqual(item);
  });

  it("to remove item from cart", () => {
    const item = {
      field1: "hello",
      field2: 10
    };

    const action = removeItemFromCartAction(item);

    expect(action.type).toEqual(REMOVE_ITEM);
    expect(action.payload).toEqual(item);
  });

  it("to decrease amount of item in the cart", () => {
    const item = {
      field1: "hello",
      field2: 10
    };

    const action = decreaseAmountAction(item);

    expect(action.type).toEqual(DECREASE_AMOUNT);
    expect(action.payload).toEqual(item);
  });

  it("to clear cart", () => {
    expect(clearCart().type).toEqual(CLEAR_CART);
  });

  it("to set cart from the Firebase", () => {
    const item1 = {
      field1: "hello",
      field2: 10
    };

    const item2 = {
      field1: "test",
      field2: 20
    };

    const items = [item1, item2];

    const action = setCartFromFirebase(items);

    expect(action.type).toEqual(SET_CART_FROM_FIREBASE);
    expect(action.payload).toEqual(items);
  });

  it("to update cart in the Firebase", () => {
    expect(updateCartInFirebase().type).toEqual(UPDATE_CART_IN_FIREBASE);
  });
});
