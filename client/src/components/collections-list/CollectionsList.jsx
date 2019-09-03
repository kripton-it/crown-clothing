import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/CollectionPreview";

import { CollectionsListContainer } from "./CollectionsListStyles";

import { selectCollectionsForPreview } from "../../redux/shop/shop-selectors";

const CollectionsList = ({ collections }) => {
  return (
    <CollectionsListContainer>
      {collections.map(collection => (
        <CollectionPreview key={collection.id} collection={collection} />
      ))}
    </CollectionsListContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsList);
