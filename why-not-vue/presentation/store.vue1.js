export const actions = {
  actionA({ commit, dispatch, store }, arg) {
    commit("increment", arg);
    dispatch("actionB", store.data);

    return 42;
  },
};
