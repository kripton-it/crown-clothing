import React from "react";
import { Route } from "react-router-dom";

import CollectionsListContainer from "../../components/collections-list/CollectionsListContainer";
import CollectionPageContainer from "../collection-page/CollectionPageContainer";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsListContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export default ShopPage;
