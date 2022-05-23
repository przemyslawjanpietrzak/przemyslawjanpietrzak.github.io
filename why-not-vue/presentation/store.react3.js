import { createDraftSafeSelector, createSelector } from "@reduxjs/toolkit";

export const selectSelf = (state) => state;
export const unsafeSelector = createSelector(
  selectSelf,
  (state) => state.value
);
export const draftSafeSelector = createDraftSafeSelector(
  selectSelf,
  (state) => state.value
);
