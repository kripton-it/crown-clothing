import React from "react";
import { mount } from "enzyme";
// import { shallow } from "enzyme";
import { BrowserRouter } from 'react-router-dom';

import ShopPage from "./ShopPage";

it("expect to render ShopPage page", () => {
  const mockMatch = {
    path: ''
  };
  
  const mockProps = {
    match: mockMatch,
  };

  const wrapper = mount(
    <BrowserRouter>
      <ShopPage {...mockProps} />
    </BrowserRouter>
  );

  expect(wrapper).toMatchSnapshot();
});
