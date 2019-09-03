import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user-selectors";
import { selectCartHidden } from "../../redux/cart/cart-selectors";

import { signOutStart } from "../../redux/user/user-actions";

import Header from "./Header";

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOutStart())
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
