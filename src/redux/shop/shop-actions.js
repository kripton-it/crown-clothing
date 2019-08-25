import ShopActionTypes from "./shop-action-types";

const { UPDATE_COLLECTIONS } = ShopActionTypes;

// установить значение пользователя
export const updateCollectionsAction = collectionsMap => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionsMap
});
