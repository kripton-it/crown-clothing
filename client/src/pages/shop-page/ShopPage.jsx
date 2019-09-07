import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Spinner from "../../components/spinner/spinner";

import { ShopPageContainer } from "./ShopPageStyles";

const CollectionsList = lazy(() =>
  import("../../components/collections-list/CollectionsListContainer")
);
const CollectionPage = lazy(() =>
  import("../collection-page/CollectionPageContainer")
);

const ShopPage = ({ match }) => {
  return (
    <ShopPageContainer>
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionsList} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </Suspense>
    </ShopPageContainer>
  );
};

export default ShopPage;
