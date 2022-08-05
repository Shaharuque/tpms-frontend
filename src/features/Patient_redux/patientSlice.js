import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseClient } from "../../Misc/BaseClient";

//async action(getAdmins) to fetch admins data list depending on page_ad
export const getpatients = createAsyncThunk("patients/getpatients", async () => {
    axios.get('https://ovh.therapypms.com/api/v1/admin/ac/patient', {
        headers: {
            headers: {
                Accept:'application/json',
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiYzhkOTM0NTUwYWI2Mzk0OTgzMmM4MDA4MTJjODIyYmNlMTNhNzkwYjdmZGZhMzhkYmQyNzllYTJmY2ZhZmRkNjNjNmQ1MTZiZTkyMTJkMjIiLCJpYXQiOjE2NTk2MDMwMDMuMjU5MDIzOTA0ODAwNDE1MDM5MDYyNSwibmJmIjoxNjU5NjAzMDAzLjI1OTAyNzAwNDI0MTk0MzM1OTM3NSwiZXhwIjoxNjkxMTM5MDAzLjI1NzkyOTA4NjY4NTE4MDY2NDA2MjUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.UMDDJuxIwkgK3vYtcfKoRmcn4pj9tq3vBiaf0m2zz7ndkYsLVAWS5o6IXCnYZCwMV93u7tankgRn7Ap8nLs4Cl5vAQevBQlYF8EoU8e267uP0xyJrEfiGzhM6BzpeSQ3FAG-8o0kQQcadMpyceBmDKfpqfXbHmKR2UcGH0dYqoxOS7HbMEAKmdJmhLuau4vwZqRszk0_thCgSV3ingOG5GZx9aGO4heEPau1WKlvIfmhid2mf4ea9Aa7mvzh_zGsAXvzxKP85gcwlw_N0ZvY8yDGEiphEHkrVHCzgUjZKFT6tk_YYHRBDJSIXQ1RLNOVoZGsxQxHf_Au9yB06Ps-9tpH_64bpXf3ubm1gzO7d9mcZpe0I-_uCVRIKZ_nlgmiolBrkPIc31ZClUs5cGcV-UCHJX21kEkCnXKeie4tCwK9Solb0Fqm5n1gmsgNniCj4rsmRFVuplUJsBneCn0EFawcWDEcroITS6I2AyJtCtW8Ycx35jBC0blnRz3j0EcXYcJPTmbXiCzLLn-J3R-fx9v_2BTPLTexTA71BWqQhK_zBNs4qQAcrjBA0BuxabWmlvLNiEVwAi4heikxcd_sB148DYNWCxuwV3op2EvN1ImdDZEVaW9YemIzQSdL53ZEnWsfmIJSsoodE-tHv1zeCPEVSI3DjSpHOeTOl0Vy-c4',
            }
        }
      })
      .then((res) => {
        return res.data
      })
});

const initialState = {
  loading: false,
  patients: [],
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
      state.patients = action.payload;
    });
    builder.addCase(getpatients.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.patients = "";
    });
  },
})

export const patientDataReducer = patientSlice.reducer; //sliceName.reducer