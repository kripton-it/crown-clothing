import React from "react";
import { shallow } from "enzyme";

import { MenuItem } from "./MenuItem";

describe("MenuItem component", () => {
  let wrapper;
  const mockHistory = {
    push: jest.fn()
  };
  const mockMatch = {
    url: "/"
  };
  const mockProps = {
    title: "hello",
    history: mockHistory,
    match: mockMatch,
    imageUrl: "abc.com",
    size: "small"
  };

  wrapper = shallow(<MenuItem {...mockProps} />);

  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("should render info:", () => {
    it("title", () => {
      expect(wrapper.find("TitleContainer").text()).toBe("hello");
    });

    it("should render imageUrl as a prop on BackgroundImageContainer", () => {
      expect(wrapper.find("BackgroundImageContainer").prop("imageUrl")).toBe(
        "abc.com"
      );
    });

    it("should render size as a prop on MenuItemContainer", () => {
      expect(wrapper.find("MenuItemContainer").prop("size")).toBe("small");
    });
  });

  describe("should call methods:", () => {
    it("should call history.push when MenuItem is clicked", () => {
      wrapper.find("MenuItemContainer").simulate("click");
      const expectedArgument = `${mockMatch.url}shop/hello`;

      expect(mockHistory.push).toHaveBeenCalledWith(expectedArgument);
    });
  });
});
