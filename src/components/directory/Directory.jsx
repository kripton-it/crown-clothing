import React from "react";

import MenuItem from "../menu-item/MenuItem";

import "./Directory.styles.scss";

import sections from "./sections";

export class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, id, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
