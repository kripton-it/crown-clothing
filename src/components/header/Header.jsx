import React from "react";

import CartIconContainer from "../cart-icon/CartIconContainer";
import CartDropdownContainer from "../cart-dropdown/CartDropdownContainer";

import {
  HeaderContainer,
  LogoContainer,
  LogoElement,
  NavigationContainer,
  NavigationItem
} from "./HeaderStyles";

const Header = ({ currentUser, hidden, signOut }) => {
  const signInJSX = <NavigationItem to="/signin">Sign In</NavigationItem>;
  const signOutJSX = (
    <NavigationItem as="div" onClick={signOut}>
      Sign Out
    </NavigationItem>
  );

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <LogoElement />
      </LogoContainer>
      <NavigationContainer>
        <NavigationItem to="/shop">Shop</NavigationItem>
        <NavigationItem to="/contacts">Contacts</NavigationItem>
        {currentUser ? signOutJSX : signInJSX}
        <CartIconContainer />
      </NavigationContainer>
      {hidden ? null : <CartDropdownContainer />}
    </HeaderContainer>
  );
};

export default Header;
