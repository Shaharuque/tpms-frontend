import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { headers } from "../../Misc/BaseClient";


//async action(getAdmins) to fetch admins data list depending on page_ad
export const getpatients = createAsyncThunk("patients/getpatients", async () => {
  //onno api thik e kaj kortesey
  const response = await axios.get(`https://ovh.therapypms.com/api/v1/admin/ac/patient`,{
    headers:headers
  });
  return response.data;
});

const initialState = {
  loading: false,
  patient: [],
  error: ''
}

const patientSlice = createSlice({
  name: 'patients',
  initialState,
  
  reducers: {

  },
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
      state.patient= "";
    });
  },
})

export const patientDataReducer = patientSlice.reducer; //sliceName.reducer