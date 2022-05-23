export const mutations = {
  increment(state, payload) {
    state.count += payload;
    Vue.set(state.arr, index, payload);
  },
};
