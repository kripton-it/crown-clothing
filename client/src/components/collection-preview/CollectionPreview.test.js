import React from "react";
import { shallow } from "enzyme";

import { CollectionPreview } from "./CollectionPreview";
import CollectionItemContainer from "../collection-item/CollectionItemContainer";

describe("CollectionPreview component", () => {
  let wrapper;
  const mockHistory = {
    push: jest.fn()
  };
  const mockMatch = {
    path: "/"
  };
  const mockRouteName = "hello";
  const mockProps = {
    collection: {
      title: "test",
      items: []
    },
    history: mockHistory,
    match: mockMatch,
    routName: mockRouteName
  };

  wrapper = shallow(<CollectionPreview {...mockProps} />);

  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("should render info:", () => {
    it("title", () => {
      const collectionTitle = wrapper.find("CollectionTitle");
      expect(collectionTitle.text()).toBe("test");
    });

    it('should render a number of CollectionItem components not greater than 4', () => {
      expect(wrapper.find(CollectionItemContainer).length).toBeLessThanOrEqual(4);
    });
  });

  describe("should call methods:", () => {
    it("should call history.push when title is clicked", () => {
      wrapper.find("CollectionTitle").simulate("click");
      const expectedArgument = `${mockMatch.path}/${mockRouteName}`;

      expect(mockHistory.push).toHaveBeenCalledWith(expectedArgument);
    });
  });
});
