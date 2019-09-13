import React from "react";
import { shallow } from "enzyme";

import CheckoutItem from "./CheckoutItem";

describe("CheckoutItem component", () => {
  let wrapper;
  const mockRemoveItem = jest.fn();
  const mockAddItemToCart = jest.fn();
  const mockDecreaseAmount = jest.fn();
  const mockCartItem = {
    imageUrl: "abc.com",
    price: 100,
    name: "hello",
    quantity: 5
  };

  beforeEach(() => {
    const mockProps = {
      cartItem: mockCartItem,
      removeItem: mockRemoveItem,
      addItemToCart: mockAddItemToCart,
      decreaseAmount: mockDecreaseAmount
    };

    wrapper = shallow(<CheckoutItem {...mockProps} />);
  });

  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("should render info:", () => {
    it("img", () => {
      const image = wrapper.find("ImageContainer img");
      expect(image.prop("src")).toBe("abc.com");
      expect(image.prop("alt")).toBe("hello");
    });

    it("name", () => {
      const itemName = wrapper.find("ItemName");
      expect(itemName.text()).toBe("hello");
    });

    it("quantity", () => {
      const itemQuantity = wrapper.find("ItemQuantityValue");
      expect(parseInt(itemQuantity.text())).toBe(5);
    });

    it("price", () => {
      const itemPrice = wrapper.find("ItemPrice");
      expect(parseInt(itemPrice.text())).toBe(100);
    });
  });

  describe("should call methods:", () => {
    it("should call removeItem when remove button is clicked", () => {
      wrapper.find("RemoveButton").simulate("click");
      expect(mockRemoveItem).toHaveBeenCalled();
    });

    it("should call decreaseAmount when left arrow is clicked", () => {
      wrapper.find("#arrow-left").simulate("click");

      expect(mockDecreaseAmount).toHaveBeenCalled();
    });

    it("should call addItemToCart when right arrow is clicked", () => {
      wrapper.find("#arrow-right").simulate("click");

      expect(mockAddItemToCart).toHaveBeenCalled();
    });
  });
});
