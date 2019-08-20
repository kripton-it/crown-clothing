import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/CollectionPreview";

import './CollectionsList.styles.scss'

import { selectCollectionsForPreview } from "../../redux/shop/shop-selectors";

const CollectionsList = ({collections}) => {
  return (
    <div className="collections-list">
      {collections.map(collection => (
        <CollectionPreview key={collection.id} collection={collection} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsList);