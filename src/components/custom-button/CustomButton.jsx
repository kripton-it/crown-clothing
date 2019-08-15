import React from "react";

import "./CustomButton.styles.scss";

const CustomButton = ({ children, ...restProps }) => {
  return (
    <button className="custom-button" {...restProps}>
      {children}
    </button>
  );
};

export default CustomButton;
