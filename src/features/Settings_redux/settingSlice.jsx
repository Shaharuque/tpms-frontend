import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseIp } from "../../Misc/BaseClient";

//async action(getAdmins) to fetch admins data list depending on page_ad
export const getsettings = createAsyncThunk(
  "settings/getsettings",
  async (token) => {
    //onno api thik e kaj kortesey
    const response = await axios.get(
      // `https://stagapi.therapypms.com/api/internaladmin/setting/get/name/location`,
      `http://localhost:8080/api/v1/internaladmin/setting/get/name/location`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-auth-token": token || null,
        },
      }
    );
    return response.data;
  }
);

const initialState = {
  loading: false,
  settingDetails: {},
  error: "",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,

  reducers: {},
  //async action creator
  extraReducers: (builder) => {
    builder.addCase(getsettings.pending, (state) => {
      state.loading = true;
      state.error = {};
    });
    builder.addCase(getsettings.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.settingDetails = action.payload;
    });
    builder.addCase(getsettings.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.settingDetails = "";
    });
  },
});

export const settingDataReducer = settingsSlice.reducer; //sliceName.reducer
