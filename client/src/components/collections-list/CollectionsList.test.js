import React from "react";
import { shallow } from "enzyme";

import { CollectionsList } from "./CollectionsList";
import CollectionPreview from "../collection-preview/CollectionPreview";

describe("CollectionsList component", () => {
  const mockProps = {
    collections: [
      {
        id: 1,
        title: "test",
        items: []
      }
    ]
  };

  const wrapper = shallow(<CollectionsList {...mockProps} />);

  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render an equal number of CollectionPreview components as the collections prop", () => {
    expect(wrapper.find(CollectionPreview).length).toEqual(
      mockProps.collections.length
    );
  });
});
