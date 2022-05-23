import { shallowMount } from "@vue/test-utils";

import Component from "./Component.vue";

describe("Badge", () => {
  const createComponent = ({ label = "" } = {}) => {
    return shallowMount(Component, {
      propsData: {
        label,
      },
      components: {
        Child,
      },
    });
  };

  it.each(["test42", "wpłynąłem na suchego przestwór oceanu"])(
    "should render text from label props",
    (label) => {
      const component = createComponent({ label });

      expect(component.find(".label").text()).toContain(label);
    }
  );

  it("should render child with prop ", () => {
    const component = createComponent();

    expect(component.find("child-stub").props().attr).toBe(42);
  });
});
