import React from "react";

import "./CollectionPreview.styles.scss";

const PREVIEWS_NUMBER = 4;

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items.slice(0, PREVIEWS_NUMBER).map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
