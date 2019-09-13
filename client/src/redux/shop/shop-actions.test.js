import ShopActionTypes from "./shop-action-types";

import * as ShopActions from "./shop-actions";

const {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE
} = ShopActionTypes;

const {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} = ShopActions;

describe("should create actions for shop:", () => {
  it("fetchCollectionsStart", () => {
    expect(fetchCollectionsStart().type).toEqual(FETCH_COLLECTIONS_START);
  });

  it("fetchCollectionsSuccess", () => {
    const collectionsMap = {
      hats: {
        id: 1
      }
    };

    const action = fetchCollectionsSuccess(collectionsMap);

    expect(action.type).toEqual(FETCH_COLLECTIONS_SUCCESS);
    expect(action.payload).toEqual(collectionsMap);
  });

  it("fetchCollectionsFailure", () => {
    const errorMessage = "Error happened";

    const action = fetchCollectionsFailure(errorMessage);

    expect(action.type).toEqual(FETCH_COLLECTIONS_FAILURE);
    expect(action.payload).toEqual(errorMessage);
  });
});
