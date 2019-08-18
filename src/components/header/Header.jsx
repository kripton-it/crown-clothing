import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'

import "./Header.styles.scss";

const Header = ({ currentUser }) => {
  const signInJSX = (
    <Link to="/signin" className="navigation-item">
      Sign In
    </Link>
  );
  const signOutJSX = (
    <div className="navigation-item" onClick={() => auth.signOut()}>
      Sign Out
    </div>
  );

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="navigation">
        <Link to="/shop" className="navigation-item">
          Shop
        </Link>
        <Link to="/contacts" className="navigation-item">
          Contacts
        </Link>
        {currentUser ? signOutJSX : signInJSX}
        <CartIcon />
      </div>
      <CartDropdown />
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

export default connect(mapStateToProps)(Header);
