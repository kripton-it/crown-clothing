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
  NavigationItemLink,
  NavigationItemDiv
} from "./HeaderStyles";

const Header = ({ currentUser, hidden }) => {
  const signInJSX = (
    <NavigationItemLink to="/signin">
      Sign In
    </NavigationItemLink>
  );
  const signOutJSX = (
    <NavigationItemDiv onClick={() => auth.signOut()}>
      Sign Out
    </NavigationItemDiv>
  );

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <LogoElement />
      </LogoContainer>
      <NavigationContainer>
        <NavigationItemLink to="/shop">
          Shop
        </NavigationItemLink>
        <NavigationItemLink to="/contacts">
          Contacts
        </NavigationItemLink>
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
