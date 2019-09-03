import { connect } from "react-redux";

import {
  addItemToCartAction,
  removeItemFromCartAction,
  decreaseAmountAction
} from "../../redux/cart/cart-actions";

import CheckoutItem from "./CheckoutItem";

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItemFromCartAction(item)),
  decreaseAmount: item => dispatch(decreaseAmountAction(item)),
  addItemToCart: item => dispatch(addItemToCartAction(item))
});

const CheckoutItemContainer = connect(
  null,
  mapDispatchToProps
)(CheckoutItem);

export default CheckoutItemContainer;
