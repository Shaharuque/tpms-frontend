import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseIp } from "../../Misc/BaseClient";

export const fetchReferringProvider = createAsyncThunk(
  "referringProvider/fetchReferringProvider",
  async ({ page, token }) => {
    const response = await axios({
      method: "post",
      url: `${baseIp}/setting/list/referring/provider`,
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
  referringProviderData: {}, //This initial type determination is very very important it can be object type or array to hold lots of data
  error: "",
};

const referringProviderSlice = createSlice({
  name: "referringProvider",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    //reducer function
    builder.addCase(fetchReferringProvider.pending, (state) => {
      state.loading = true;
      state.isError = false;
      state.error = "";
    });
    builder.addCase(fetchReferringProvider.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.isError = false;
      state.referringProviderData = action.payload;
    });
    builder.addCase(fetchReferringProvider.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.isError = true;
      state.referringProviderData = {};
    });
  },
});

export const referringProviderReducer = referringProviderSlice.reducer; //sliceName.reducer
