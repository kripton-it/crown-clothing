import React from "react";

import "./FormInput.styles.scss";

const FormInput = ({ handleChange, label, ...restProps }) => {
  const labelJSX = label ? (
    <label
      className={`form-input-label${restProps.value.length ? " shrink" : ""}`}
    >
      {label}
    </label>
  ) : null;

  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...restProps} />
      {labelJSX}
    </div>
  );
};

export default FormInput;
