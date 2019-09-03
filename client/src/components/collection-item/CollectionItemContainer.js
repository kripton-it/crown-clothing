import { connect } from "react-redux";

import { addItemToCartAction } from "../../redux/cart/cart-actions";

import CollectionItem from "./CollectionItem";

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCartAction(item))
});

const CollectionItemContainer = connect(
  null,
  mapDispatchToProps
)(CollectionItem);

export default CollectionItemContainer;
