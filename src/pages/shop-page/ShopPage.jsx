import React from "react";
import { Route } from "react-router-dom";

import CollectionsList from "../../components/collections-list/CollectionsList";
import CollectionPage from "../collection-page/CollectionPage";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsList} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
