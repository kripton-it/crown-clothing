import React from "react";
import { shallow } from "enzyme";

import CheckoutPage from "./CheckoutPage";

it("expect to render CheckoutPage page", () => {
  const mockProps = {
    cartItems: [
      {
        id: 1,
        imageUrl: "abc.com",
        name: "Hello",
        price: 100,
        quantity: 2
      }
    ],
    total: 100
  }
  expect(shallow(<CheckoutPage {...mockProps} />)).toMatchSnapshot();
});
