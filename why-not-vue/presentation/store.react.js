import produce from "immer";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decrement":
      return produce(state, (draft) => {
        draft--;
      });
    default:
      return state;
  }
};
