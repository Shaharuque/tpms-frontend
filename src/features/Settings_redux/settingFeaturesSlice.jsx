import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseIp, headers } from "../../Misc/BaseClient";

//async action(getAdmins) to fetch admins data list depending on page_ad
export const fetchData = createAsyncThunk(
  "settings/fetchData",
  async ({ endPoint, page }) => {
    console.log(endPoint, page);
    //onno api thik e kaj kortesey
    const response = await axios.get(`${baseIp}/${endPoint}?page=${page}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem("adminToken") || null,
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

const settingFeaturesSlice = createSlice({
  name: "settings",
  initialState,

  reducers: {},
  //async action creator
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
      state.error = {};
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.result = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.result = "";
    });
  },
});

export const settingReducer = settingFeaturesSlice.reducer; //sliceName.reducer
