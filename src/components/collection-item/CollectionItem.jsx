import React from "react";
import { connect } from "react-redux";

import { addItemToCartAction } from "../../redux/cart/cart-actions";

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

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCartAction(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
