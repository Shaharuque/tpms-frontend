import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: undefined,
};

const loginSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
    },
    userLoggedOut: (state, action) => {
      state.accessToken = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLoggedIn, userLoggedOut } = loginSlice.actions;

export const authReducer = loginSlice.reducer; //sliceName.reducer
