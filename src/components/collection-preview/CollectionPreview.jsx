import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/CollectionItem";

import {
  CollectionPreviewContainer,
  CollectionTitle,
  CollectionList
} from "./CollectionPreviewStyles";

const PREVIEWS_NUMBER = 4;

const CollectionPreview = ({ collection, history, match, routName }) => {
  const { title, items } = collection;

  return (
    <CollectionPreviewContainer>
      <CollectionTitle
        onClick={() => history.push(`${match.path}/${routName}`)}
      >
        {title}
      </CollectionTitle>
      <CollectionList>
        {items.slice(0, PREVIEWS_NUMBER).map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionList>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
