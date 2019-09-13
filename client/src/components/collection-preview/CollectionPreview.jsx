import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItemContainer from "../collection-item/CollectionItemContainer";

import {
  CollectionPreviewContainer,
  CollectionTitle,
  CollectionList
} from "./CollectionPreviewStyles";

const PREVIEWS_NUMBER = 4;

export const CollectionPreview = ({ collection, history, match, routName }) => {
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
          <CollectionItemContainer key={item.id} item={item} />
        ))}
      </CollectionList>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
