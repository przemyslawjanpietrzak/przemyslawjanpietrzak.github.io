import React from "react";
import { shallow } from "enzyme";

import Component from "./Component";
import Child from "./Child";

describe("<MyComponent />", () => {
  it("renders three <Child /> components", () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.find(Child)).to.have.lengthOf(3);
  });

  it("renders an `.label`", () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(".icon-star")).toContains("label");
  });
});
