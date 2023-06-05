import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { patientIp } from "../../../Misc/BaseClient";

//async action create=>thunk function (Patient Details)
const initialState = {
  loading: false,
  infoDetails: [],
  error: "",
};

export const getMyInfoDetails = createAsyncThunk("myInfoPatientPortal/getMyInfoDetails", async (token) => {
  const response = await axios.get(`${patientIp}/my/info`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-auth-token": token || null,
    },
  });
  return response.data;
});

const infoDetailstSlice = createSlice({
  name: "myInfoPatientPortal",
  initialState,

  reducers: {},
  //async action creator
  extraReducers: (builder) => {
    builder.addCase(getMyInfoDetails.pending, (state) => {
      state.loading = true;
      state.error = {};
    });
    builder.addCase(getMyInfoDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.infoDetails = action.payload;
    });
    builder.addCase(getMyInfoDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.infoDetails = "";
    });
  },
});

export const infoDetailsReducer = infoDetailstSlice.reducer; //sliceName.reducer
