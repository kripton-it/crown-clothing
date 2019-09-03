import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop-selectors";

import CollectionItemContainer from "../../components/collection-item/CollectionItemContainer";

import {
  CollectionPageContainer,
  TitleContainer,
  ItemsContainer
} from "./CollectionPageStyles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer>
        {items.map(item => (
          <CollectionItemContainer
            className="collection-item"
            key={item.id}
            item={item}
          />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
