import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: {},
};

export const loginSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    storeEmail: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.email = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeEmail } = loginSlice.actions;

export const emailDetailsReducer = loginSlice.reducer; //sliceName.reducer
