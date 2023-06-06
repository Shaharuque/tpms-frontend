import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseIp } from "../../Misc/BaseClient";

//async thunk(fetchServiceSubType) to fetch pos data list depending on page_ad
export const fetchServiceSubType = createAsyncThunk(
  "settings/fetchServiceSubType",
  async ({ token, payload }) => {
    const response = await axios({
      url: `${baseIp}/setting/subactivity/get`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "x-auth-token": token || null,
      },
      data: payload,
    });
    return response.data;
  }
);

const initialState = {
  loading: false,
  isError: false,
  serviceSubTypes: {},
  error: "",
};

const serviceSubtypeSlice = createSlice({
  name: "settings",
  initialState,
  //In redux-toolkit when async thunk function returns a promise and redux toolkit gets that promise, it will autometically dispatch 3 action(promise.pending,promise.fullfilled,promise.rejected) by himself, extraReducers will listen to those actions and update state.
  extraReducers: (builder) => {
    builder
      .addCase(fetchServiceSubType.pending, (state) => {
        state.loading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchServiceSubType.fulfilled, (state, action) => {
        state.loading = false;
        state.isError = false;
        state.error = "";
        state.serviceSubTypes = action.payload;
      })
      .addCase(fetchServiceSubType.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.error = action.error;
        state.serviceSubTypes = "";
      });
  },
});

export const serviceSubTypeReducer = serviceSubtypeSlice.reducer; //sliceName.reducer
