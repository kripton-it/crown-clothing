import React from "react";
import { shallow } from "enzyme";

import Header from "./Header";
import CartDropdown from "../cart-dropdown/CartDropdownContainer";

describe("Header component", () => {
  const mockCurrentUser = {
    uid: "12"
  };
  const mockSignOut = jest.fn();
  const mockProps = {
    hidden: true,
    currentUser: mockCurrentUser,
    signOut: mockSignOut
  };

  const wrapper = shallow(<Header {...mockProps} />);

  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("should render CartDropdown:", () => {
    it("expect not to render CartDropdown, if hidden is true", () => {
      expect(wrapper.exists(CartDropdown)).toBe(false);
    });

    it("expect to render CartDropdown, if hidden is false", () => {
      const mockProps = {
        hidden: false,
        currentUser: mockCurrentUser,
        signOut: mockSignOut
      };

      const wrapper = shallow(<Header {...mockProps} />);

      expect(wrapper.exists(CartDropdown)).toBe(true);
    });
  });

  describe("should render Sign In or Sign Out:", () => {
    it("expect to render Sign Out, if currentUser exists", () => {
      expect(wrapper.find("#sign-link").text()).toBe("Sign Out");
      wrapper.find("#sign-link").simulate('click');
      expect(mockSignOut).toHaveBeenCalled();
    });

    it("expect to render Sign In, if currentUser does not exist", () => {
      const mockProps = {
        hidden: false,
        currentUser: null,
        signOut: mockSignOut
      };

      const wrapper = shallow(<Header {...mockProps} />);
      expect(wrapper.find("#sign-link").text()).toBe("Sign In");
    });
  });

  describe("should call methods:", () => {});
});
