import React from "react";
import { shallow } from "enzyme";

import FormInput from "./FormInput";

describe("FormInput component", () => {
  const mockHandleChange = jest.fn();
  const mockLabel = "test";
  const mockValue = "hello;";
  const mockProps = {
    handleChange: mockHandleChange,
    label: mockLabel,
    type: "email",
    name: "email",
    required: true,
    value: mockValue
  };

  const wrapper = shallow(<FormInput {...mockProps} />);

  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("should render FormInputLabel:", () => {
    it("expect to render FormInputLabel, if label is defined", () => {
      expect(wrapper.exists("FormInputLabel")).toBe(true);
    });

    it("expect not to render FormInputLabel, if label is undefined", () => {
      const mockProps = {
        handleChange: mockHandleChange,
        type: "email",
        name: "email",
        required: true,
        value: mockValue
      };

      const wrapper = shallow(<FormInput {...mockProps} />);

      expect(wrapper.exists("FormInputLabel")).toBe(false);
    });
  });

  describe("should call methods:", () => {
    it("should call handleChange when input is changed", () => {
      wrapper.find("FormInputContainer").simulate("change");
      expect(mockHandleChange).toHaveBeenCalled();
    });
  });
});
