import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutPage from "./CheckoutPage";

import {
  selectCartItems,
  selectCartTotalPrice
} from "../../redux/cart/cart-selectors";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotalPrice
});

const CheckoutPageContainer = connect(mapStateToProps)(CheckoutPage);

export default CheckoutPageContainer;
