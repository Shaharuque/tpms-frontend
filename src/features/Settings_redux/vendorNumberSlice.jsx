import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseIp } from "../../Misc/BaseClient";

//async action(getAdmins) creator to fetch admins data list depending on page_ad
export const fetchVendorNumber = createAsyncThunk(
  "vendorNumberSetup/fetchVendorNumber",
  async ({ page, tx_id, region_id, token }) => {
    const response = await axios({
      method: "post",
      url: `${baseIp}/setting/vendor/number/list`,
      headers: {
        Accept: "application/json",
        "x-auth-token": token || null,
      },
      data: {
        page: page,
        tx_id,
        region_id,
      },
    });
    return response.data;
  }
);

const initialState = {
  loading: false,
  isError: false,
  vendorData: {}, //This initial type determination is very very important it can be object type or array to hold lots of data
  error: "",
};

const vendorNumberSlice = createSlice({
  name: "vendorNumberSetup",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    //reducer function
    builder.addCase(fetchVendorNumber.pending, (state) => {
      state.loading = true;
      state.isError = false;
      state.error = "";
    });
    builder.addCase(fetchVendorNumber.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.isError = false;
      state.vendorData = action.payload;
    });
    builder.addCase(fetchVendorNumber.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.isError = true;
      state.vendorData = {};
    });
  },
});

export const vendorNumberReducer = vendorNumberSlice.reducer; //sliceName.reducer
