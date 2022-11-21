import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: {},
};

export const loginSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    // storeEmail is a action which take state and action as parameter and depends on those parameters some logic is executed
    storeEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeEmail } = loginSlice.actions;

export const emailDetailsReducer = loginSlice.reducer; //sliceName.reducer
