import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { headers } from "../../Misc/BaseClient";

//async action(getAdmins) to fetch admins data list depending on page_ad
//Action creator to fetch admins data list depending on page_ad
export const getpatients = createAsyncThunk(
  "patients/getpatients",
  async () => {
    //onno api thik e kaj kortesey
    const response = await axios.get(
      `https://ovh.therapypms.com/api/v1/admin/ac/patient`,
      {
        headers: headers,
      }
    );
    return response.data;
  }
);

const initialState = {
  loading: false,
  patient: [],
  patientDetails: [],
  error: "",
};

const patientSlice = createSlice({
  name: "patients",
  initialState,

  reducers: {},
  //async action creator
  extraReducers: (builder) => {
    builder.addCase(getpatients.pending, (state) => {
      state.loading = true;
      state.error = {};
    });
    builder.addCase(getpatients.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.patient = action.payload;
    });
    builder.addCase(getpatients.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.patient = "";
    });
  },
});

export const patientDataReducer = patientSlice.reducer; //sliceName.reducer

//----------------------------------------//
//async action create (Patient Details)
export const getpatientsDetails = createAsyncThunk(
  "patients/getpatientsDetails",
  async (id) => {
    //onno api thik e kaj kortesey
    const response = await axios.get(
      `https://ovh.therapypms.com/api/v1/admin/ac/patient/info/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: localStorage.getItem("adminToken") || null,
        },
      }
    );
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
