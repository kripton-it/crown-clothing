import React from "react";
import { shallow } from "enzyme";

import CartItem from "./CartItem";

describe("CartItem component", () => {
  const mockItem = {
    imageUrl: "abc.com",
    price: 100,
    name: "hello",
    quantity: 5
  };

  const wrapper = shallow(<CartItem item={mockItem} />);

  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("should render info:", () => {
    it("img", () => {
      const image = wrapper.find("CartItemContainer img");
      expect(image.prop("src")).toBe("abc.com");
      expect(image.prop("alt")).toBe("hello");
    });

    it("name", () => {
      const itemName = wrapper.find("ItemName");
      expect(itemName.text()).toBe("hello");
    });

    it("price", () => {
      const itemPrice = wrapper.find("ItemPrice");
      expect(itemPrice.text()).toBe("5 x $100");
    });
  });
});
