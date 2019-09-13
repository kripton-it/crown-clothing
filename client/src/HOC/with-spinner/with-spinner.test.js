import React from "react";
import { shallow } from "enzyme";

import Spinner from "../../components/spinner/spinner";
import WithSpinner from "./with-spinner";

describe("withSpinner HOC:", () => {
  const TestComponent = () => <div className="test" />
  const WrappedComponent = WithSpinner(TestComponent);

  describe("if loading is true:", () => {
    it("expect to render Spinner component", () => {
      const wrapper = shallow(<WrappedComponent isLoading={true} />)
      expect(wrapper.exists(Spinner)).toBe(true);
    });

    it("expect not to render TestComponent component", () => {
      const wrapper = shallow(<WrappedComponent isLoading={true} />)
      expect(wrapper.exists(TestComponent)).toBe(false);
    });
  })

  describe("if loading is false:", () => {
    it("expect not to render Spinner component", () => {
      const wrapper = shallow(<WrappedComponent isLoading={false} />)
      expect(wrapper.exists(Spinner)).toBe(false);
    });

    it("expect to render TestComponent component", () => {
      const wrapper = shallow(<WrappedComponent isLoading={false} />)
      expect(wrapper.exists(TestComponent)).toBe(true);
    });
  })
})


