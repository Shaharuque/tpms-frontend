import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseIp } from "../../Misc/BaseClient";

//async action(getAdmins) to fetch admins data list depending on page_ad
export const fetchCpt = createAsyncThunk(
  "settings/fetchCpt",
  async ({ endPoint, page, token }) => {
    console.log(token);
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
  cptData: {},
  error: {},
};

const cptCodeSlice = createSlice({
  name: "settings",
  initialState,

  reducers: {},
  //async action creator
  extraReducers: (builder) => {
    builder.addCase(fetchCpt.pending, (state) => {
      state.loading = true;
      state.error = {};
    });
    builder.addCase(fetchCpt.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.cptData = action.payload;
    });
    builder.addCase(fetchCpt.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.cptData = "";
    });
  },
});

export const cptReducer = cptCodeSlice.reducer; //sliceName.reducer
