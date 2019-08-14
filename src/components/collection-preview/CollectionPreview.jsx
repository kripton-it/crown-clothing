import React from "react";

import CollectionItem from "../collection-item/CollectionItem";

import "./CollectionPreview.styles.scss";

const PREVIEWS_NUMBER = 4;

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items.slice(0, PREVIEWS_NUMBER).map(item => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
