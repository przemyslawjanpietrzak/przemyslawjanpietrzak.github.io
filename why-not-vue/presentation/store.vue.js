import { createStore } from "vuex";

const moduleA = {
  state: () => ({}),
  mutations: {},
  actions: {},
  getters: {},
};

export const store = createStore({
  modules: {
    a: moduleA,
  },
});
