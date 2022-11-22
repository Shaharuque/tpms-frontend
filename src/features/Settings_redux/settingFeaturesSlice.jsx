import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseIp } from "../../Misc/BaseClient";

//async action(getAdmins) to fetch admins data list depending on page_ad
export const fetchServices = createAsyncThunk(
  "settings/fetchServices",
  async ({ endPoint, page, token }) => {
    console.log(endPoint, page);
    //onno api thik e kaj kortesey
    const response = await axios.get(`${baseIp}/${endPoint}?page=${page}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token || null,
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
