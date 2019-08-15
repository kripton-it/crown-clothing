import React from "react";

import "./CustomButton.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...restProps }) => {
  return (
    <button className={`custom-button${isGoogleSignIn ? " google-sign-in" : ""}`} {...restProps}>
      {children}
    </button>
  );
};

export default CustomButton;
