import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: undefined,
  userInfo: {},
};

const loginSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.userInfo = action.payload.userInfo;
    },
    userLoggedOut: (state, action) => {
      state.accessToken = undefined;
      state.userInfo = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLoggedIn, userLoggedOut } = loginSlice.actions;

export const authReducer = loginSlice.reducer; //sliceName.reducer
