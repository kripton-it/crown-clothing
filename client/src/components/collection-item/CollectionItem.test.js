import React from "react";
import { shallow } from "enzyme";

import CollectionItem from "./CollectionItem";

describe("CollectionItem component", () => {
  let wrapper;
  const mockAddItemToCart = jest.fn();
  const mockItem = {
    imageUrl: "abc.com",
    price: 100,
    name: "hello",
  };

  beforeEach(() => {
    const mockProps = {
      item: mockItem,
      addItemToCart: mockAddItemToCart,
    };

    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("should render info:", () => {
    it("name", () => {
      const itemName = wrapper.find("CollectionName");
      expect(itemName.text()).toBe("hello");
    });

    it("price", () => {
      const itemPrice = wrapper.find("CollectionPrice");
      expect(itemPrice.text()).toBe("$100");
    });

    it('should render imageUrl as a prop on BackgroundImage', () => {
      expect(wrapper.find('BackgroundImage').prop('imageUrl')).toBe("abc.com");
    });
  });

  describe("should call methods:", () => {
    it("should call addItemToCart when add-to-cart button is clicked", () => {
      wrapper.find("AddButton").simulate("click");
      expect(mockAddItemToCart).toHaveBeenCalled();
    });
  });
});
