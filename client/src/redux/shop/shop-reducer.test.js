import ShopActionTypes from "./shop-action-types";

import shopReducer, { INITIAL_STATE } from "./shop-reducer";

const {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE
} = ShopActionTypes;

describe("shopReducer:", () => {
  it("should return the initial state", () => {
    expect(shopReducer()).toEqual(INITIAL_STATE);
  });

  it("should handle FETCH_COLLECTIONS_START", () => {
    const newState = shopReducer(INITIAL_STATE, {
      type: FETCH_COLLECTIONS_START
    });
    expect(newState.isFetching).toBe(true);
    expect(newState.collections).toEqual(INITIAL_STATE.collections);
    expect(newState.errorMessage).toEqual(INITIAL_STATE.errorMessage);
  });

  it("should handle FETCH_COLLECTIONS_SUCCESS", () => {
    const state = {
      ...INITIAL_STATE,
      isFetching: true
    };
    const collections = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const newState = shopReducer(state, {
      type: FETCH_COLLECTIONS_SUCCESS,
      payload: collections
    });
    expect(newState.isFetching).toBe(false);
    expect(newState.collections.length).toEqual(collections.length);
    expect(newState.errorMessage).toBe("");
  });

  it("should handle FETCH_COLLECTIONS_FAILURE", () => {
    const state = {
      ...INITIAL_STATE,
      isFetching: true
    };
    const errorMessage = "Error happened";
    const newState = shopReducer(state, {
      type: FETCH_COLLECTIONS_FAILURE,
      payload: errorMessage
    });
    expect(newState.isFetching).toBe(false);
    expect(newState.collections).toEqual(state.collections);
    expect(newState.errorMessage).toEqual(errorMessage);
  });
});
