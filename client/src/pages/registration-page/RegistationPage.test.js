import React from "react";
import { shallow } from "enzyme";

import RegistationPage from "./RegistationPage";

it("expect to render RegistationPage page", () => {
  expect(shallow(<RegistationPage />)).toMatchSnapshot();
});
