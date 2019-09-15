import { takeLatest, call, put, all } from "redux-saga/effects";

import ShopActionTypes from "./shop-action-types";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop-actions";

import shopSagas, { fetchCollectionsStart, fetchCollectionsAsync } from "./shop-sagas";

const { FETCH_COLLECTIONS_START } = ShopActionTypes;

describe("shopSagas", () => {
  it("should watch fetchCollectionsStart", () => {
    const generator = shopSagas();
    expect(generator.next().value).toEqual(
      all([call(fetchCollectionsStart)])
    );
  });
})

describe('fetch collections start saga', () => {
  it('should trigger on FETCH_COLLECTIONS_START', () => {
    const generator = fetchCollectionsStart();
    expect(generator.next().value).toEqual(
      takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync)
    );
  });
});

describe('fetch collections async saga', () => {
  const generator = fetchCollectionsAsync();

  it('should call firestore collection ', () => {
    const getCollection = jest.spyOn(firestore, 'collection');
    generator.next();
    expect(getCollection).toHaveBeenCalled();
  });

  it('should call convertCollectionsSnapshot saga ', () => {
    const mockSnapshot = {};
    expect(generator.next(mockSnapshot).value).toEqual(
      call(convertCollectionsSnapshotToMap, mockSnapshot)
    );
  });

  it('should fire fetchCollectionsSuccess if collectionsMap is succesful', () => {
    const mockCollectionsMap = {
      hats: { id: 1 }
    };

    expect(generator.next(mockCollectionsMap).value).toEqual(
      put(fetchCollectionsSuccess(mockCollectionsMap))
    );
  });

  it('should fire fetchCollectionsFailure if get collection fails at any point', () => {
    const newGenerator = fetchCollectionsAsync();
    newGenerator.next();
    expect(newGenerator.throw({ message: 'error' }).value).toEqual(
      put(fetchCollectionsFailure('error'))
    );
  });
});
