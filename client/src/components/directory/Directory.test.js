import React from "react";
import { shallow } from "enzyme";

import { Directory } from "./Directory";
import MenuItem from "../menu-item/MenuItem";

describe("Directory component", () => {
  const mockProps = {
    sections: [
      {
        id: 1,
        title: "test",
        imageUrl: "abc.com",
        size: "small"
      }
    ]
  };

  const wrapper = shallow(<Directory {...mockProps} />);

  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render an equal number of MenuItem components as the sections prop", () => {
    expect(wrapper.find(MenuItem).length).toEqual(mockProps.sections.length);
  });
});
