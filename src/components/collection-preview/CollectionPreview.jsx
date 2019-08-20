import React from "react";

import CollectionItem from "../collection-item/CollectionItem";

import "./CollectionPreview.styles.scss";

const PREVIEWS_NUMBER = 4;

const CollectionPreview = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items.slice(0, PREVIEWS_NUMBER).map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
