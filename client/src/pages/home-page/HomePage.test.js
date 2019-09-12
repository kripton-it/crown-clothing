import React from "react";
import { shallow } from "enzyme";

import HomePage from "./HomePage";

it("expect to render HomePage page", () => {
  expect(shallow(<HomePage />)).toMatchSnapshot();
});
