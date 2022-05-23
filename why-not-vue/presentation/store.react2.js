import { createAction } from "@reduxjs/toolkit";

export const increment = createAction("counter/increment");

export const increment = (amount) => {
  return {
    type: INCREMENT,
    payload: amount,
  };
};
