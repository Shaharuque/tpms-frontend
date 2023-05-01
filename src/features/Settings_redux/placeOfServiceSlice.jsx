import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseIp } from "../../Misc/BaseClient";

//async thunk(fetchPOS) to fetch pos data list depending on page_ad
export const fetchPOS = createAsyncThunk(
  "settings/fetchPOS",
  async ({ page, token }) => {
    const response = await axios({
      method: "post",
      url: `${baseIp}/setting/list/pos/code`,
      headers: {
        Accept: "application/json",
        "x-auth-token": token || null,
      },
      data: {
        page: page,
      },
    });
    return response.data;
  }
);

const initialState = {
  loading: false,
  isError: false,
  posData: {},
  error: "",
};

const posSlice = createSlice({
  name: "settings",
  initialState,

  reducers: {},
  //In redux-toolkit when async thunk function returns a promise and redux toolkit gets that promise, it will autometically dispatch 3 action(promise.pending,promise.fullfilled,promise.rejected) by himself, extraReducers will listen to those actions and update state.
  extraReducers: (builder) => {
    builder.addCase(fetchPOS.pending, (state) => {
      state.loading = true;
      state.isError = false;
      state.error = "";
    });
    builder.addCase(fetchPOS.fulfilled, (state, action) => {
      state.loading = false;
      state.isError = false;
      state.error = "";
      state.posData = action.payload;
    });
    builder.addCase(fetchPOS.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
      state.error = action.error;
      state.posData = "";
    });
  },
});

export const posReducer = posSlice.reducer; //sliceName.reducer
