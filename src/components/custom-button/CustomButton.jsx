import React from "react";

import "./CustomButton.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...restProps }) => {
  return (
    <button
      className={`custom-button${isGoogleSignIn ? " google-sign-in" : ""}${inverted ? " inverted" : ""}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
