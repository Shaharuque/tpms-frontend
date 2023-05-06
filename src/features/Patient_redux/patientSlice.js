import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseIp } from "../../Misc/BaseClient";

//async action create=>thunk function (Patient Details)
const initialState = {
  loading: false,
  patientDetails: [],
  error: "",
};

export const getpatientsDetails = createAsyncThunk(
  "patients/getpatientsDetails",
  async ({ payload, token }) => {
    const response = await axios.post(`${baseIp}/patient/info`, payload, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-auth-token": token || null,
      },
    });
    return response.data;
  }
);

const patientDetailstSlice = createSlice({
  name: "patients",
  initialState,

  reducers: {},
  //async action creator
  extraReducers: (builder) => {
    builder.addCase(getpatientsDetails.pending, (state) => {
      state.loading = true;
      state.error = {};
    });
    builder.addCase(getpatientsDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.patientDetails = action.payload;
    });
    builder.addCase(getpatientsDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.patientDetails = "";
    });
  },
});

export const patientDetailsReducer = patientDetailstSlice.reducer; //sliceName.reducer
