import React from "react";
import { shallow } from "enzyme";

import { CollectionPage } from "./CollectionPage";

it("expect to render CollectionPage page", () => {
  const mockProps = {
    collection: {
      title: "Hello",
      items: [
        {
          id: 1,
          imageUrl: "abc.com",
          name: "Hello",
          price: 100,
          quantity: 2
        }
      ]
    }
  };
  expect(shallow(<CollectionPage {...mockProps} />)).toMatchSnapshot();
});
