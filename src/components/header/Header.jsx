import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

import { selectCurrentUser } from "../../redux/user/user-selectors";
import { selectCartHidden } from "../../redux/cart/cart-selectors";

import {
  HeaderContainer,
  LogoContainer,
  LogoElement,
  NavigationContainer,
  NavigationItem
} from "./HeaderStyles";

const Header = ({ currentUser, hidden }) => {
  const signInJSX = (
    <NavigationItem to="/signin">
      Sign In
    </NavigationItem>
  );
  const signOutJSX = (
    <NavigationItem as="div" onClick={() => auth.signOut()}>
      Sign Out
    </NavigationItem>
  );

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <LogoElement />
      </LogoContainer>
      <NavigationContainer>
        <NavigationItem to="/shop">
          Shop
        </NavigationItem>
        <NavigationItem to="/contacts">
          Contacts
        </NavigationItem>
        {currentUser ? signOutJSX : signInJSX}
        <CartIcon />
      </NavigationContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
