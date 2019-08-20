import React from "react";
import { withRouter } from "react-router-dom";

import "./MenuItem.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, match }) => {
  return (
    <div
      className={`menu-item menu-item-${size}`}
      onClick={() => history.push(`${match.url}shop/${title}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
