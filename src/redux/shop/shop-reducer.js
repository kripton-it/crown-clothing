// import collections from "./collections";

/* const INITIAL_STATE = {
  collections
}; */

import ShopActionTypes from "./shop-action-types";

const { UPDATE_COLLECTIONS } = ShopActionTypes;

const INITIAL_STATE = {
  collections: {}
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
