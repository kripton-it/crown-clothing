import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
  // предпочтительнее, чем Object.values()
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  );

export const selectIsCollectionsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsAbsent = createSelector(
  [selectShop],
  shop => !shop.collections
);

/* export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
); */