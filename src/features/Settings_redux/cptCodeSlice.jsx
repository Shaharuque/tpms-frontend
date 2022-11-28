import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseIp } from "../../Misc/BaseClient";

//async action(getAdmins) creator to fetch admins data list depending on page_ad
export const fetchCpt = createAsyncThunk(
  "settings/fetchCpt",
  async ({ endPoint, page, token }) => {
    console.log(token);

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
  isError: false,
  cptData: {}, //This initial type determination is very very important it can be object type or array to hold lots of data
  error: "",
};

const cptCodeSlice = createSlice({
  name: "settings",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    //reducer function
    builder.addCase(fetchCpt.pending, (state) => {
      state.loading = true;
      state.isError = false;
      state.error = "";
    });
    builder.addCase(fetchCpt.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.isError = false;
      state.cptData = action.payload;
    });
    builder.addCase(fetchCpt.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.isError = true;
      state.cptData = {};
    });
  },
});

export const cptReducer = cptCodeSlice.reducer; //sliceName.reducer
