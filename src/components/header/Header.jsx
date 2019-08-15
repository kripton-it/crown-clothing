import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";

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
      </div>
    </div>
  );
};

export default Header;
