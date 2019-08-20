import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/CollectionPreview";

import './CollectionsList.styles.scss'

import { selectCollections } from "../../redux/shop/shop-selectors";

const CollectionsList = ({collections}) => {
  return (
    <div className="collections-list">
      {collections.map(({ id, ...restProps }) => (
        <CollectionPreview key={id} {...restProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsList);