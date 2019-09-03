import React from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from "./FormInputStyles";

const FormInput = ({ handleChange, label, ...restProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...restProps} />
      {label ? (
        <FormInputLabel shrink={!!restProps.value.length}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
