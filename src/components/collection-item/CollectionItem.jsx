import React from "react";

import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooterContainer,
  CollectionName,
  CollectionPrice,
  AddButton
} from "./CollectionItemStyles";

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <CollectionName>{name}</CollectionName>
        <CollectionPrice>{`$${price}`}</CollectionPrice>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => addItemToCart(item)}>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
