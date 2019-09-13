import React from "react";
import { shallow } from "enzyme";

import CustomButton from "./CustomButton";

describe("CustomButton component", () => {
  const wrapper = shallow(
    <CustomButton>
      <span>Hello,</span>
      <span>world</span>
    </CustomButton>
  );

  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
