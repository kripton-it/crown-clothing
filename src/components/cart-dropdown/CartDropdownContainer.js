import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart-selectors";

import CartDropdown from "./CartDropdown";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const CartDropdownContainer = compose(
  withRouter,
  connect(mapStateToProps)
)(CartDropdown);

export default CartDropdownContainer;
