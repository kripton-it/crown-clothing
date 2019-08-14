import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./Header.styles.scss";

const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;
