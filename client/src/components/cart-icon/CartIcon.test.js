import React from "react";
import { shallow } from "enzyme";

import CartIcon from "./CartIcon";

describe("CartIcon component", () => {
  let wrapper;

  it("should render", () => {
    const mockProps = {
      location: {
        pathname: "/"
      },
      toggleCartHidden: jest.fn(),
      itemsCount: 0
    };

    wrapper = shallow(<CartIcon {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the itemCount as the text', () => {
    const mockProps = {
      location: {
        pathname: "/"
      },
      toggleCartHidden: jest.fn(),
      itemsCount: 5
    };

    wrapper = shallow(<CartIcon {...mockProps} />);
    const itemCount = parseInt(wrapper.find('ItemsCount').text());
    expect(itemCount).toBe(5);
  });

  it('should call toggleCartHidden when CartIcon is clicked, if itemsCount > 0 and pathname !== "/checkout"', () => {
    const mockToggleCartHidden = jest.fn();
    const mockProps = {
      location: {
        pathname: "/"
      },
      toggleCartHidden: mockToggleCartHidden,
      itemsCount: 10
    };

    wrapper = shallow(<CartIcon {...mockProps} />);
    wrapper.find("CartIconContainer").simulate("click");
    expect(mockToggleCartHidden).toHaveBeenCalled();
  });

  it("should not call toggleCartHidden when CartIcon is clicked, if itemsCount === 0", () => {
    const mockToggleCartHidden = jest.fn();
    const mockProps = {
      location: {
        pathname: "/"
      },
      toggleCartHidden: mockToggleCartHidden,
      itemsCount: 0
    };

    wrapper = shallow(<CartIcon {...mockProps} />);
    wrapper.find("CartIconContainer").simulate("click");
    expect(mockToggleCartHidden).not.toHaveBeenCalled();
  });

  it('should not call toggleCartHidden when CartIcon is clicked, if pathname === "/checkout"', () => {
    const mockToggleCartHidden = jest.fn();
    const mockProps = {
      location: {
        pathname: "/checkout"
      },
      toggleCartHidden: mockToggleCartHidden,
      itemsCount: 10
    };

    wrapper = shallow(<CartIcon {...mockProps} />);
    wrapper.find("CartIconContainer").simulate("click");
    expect(mockToggleCartHidden).not.toHaveBeenCalled();
  });
});
