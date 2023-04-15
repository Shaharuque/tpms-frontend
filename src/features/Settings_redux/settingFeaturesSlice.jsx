import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//async action(getAdmins) to fetch admins data list depending on page_ad
export const fetchServices = createAsyncThunk(
  "settings/fetchServices",
  async ({ page, token }) => {
    console.log(page, token);
    //onno api thik e kaj kortesey
    const response = await axios({
      method: "post",
      url: "https://stagapi.therapypms.com/api/internaladmin/setting/list/setting/service",
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
  result: {},
  error: {},
};

const serviceSlice = createSlice({
  name: "settings",
  initialState,

  reducers: {},
  //async action creator
  extraReducers: (builder) => {
    builder.addCase(fetchServices.pending, (state) => {
      state.loading = true;
      state.error = {};
    });
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.result = action.payload;
    });
    builder.addCase(fetchServices.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.result = "";
    });
  },
});

export const serviceReducer = serviceSlice.reducer; //sliceName.reducer
