import React from "react";
import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  TitleContainer,
  SubtitleContainer
} from "./MenuItemStyles";

const MenuItem = ({ title, imageUrl, size, history, match }) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}shop/${title}`)}
    >
      <BackgroundImageContainer
        className="background-image"
        imageUrl={imageUrl}
      />
      <ContentContainer className="content">
        <TitleContainer>{title}</TitleContainer>
        <SubtitleContainer>Shop now</SubtitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
