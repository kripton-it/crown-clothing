import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "../menu-item/MenuItem";

import { DirectoryMenuContainer } from "./DirectoryStyles";

import { selectSections } from "../../redux/directory/directory-selectors";

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...restProps }) => (
        <MenuItem key={id} {...restProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

export default connect(mapStateToProps)(Directory);
