import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { headers } from "../../Misc/BaseClient";

const postLoginData = createAsyncThunk("login/postLoginData", async (data) => {
  const config = {
    method: "post",
    url: "https://app.therapypms.com/api/v1/admin/login",
    headers: headers,
    data: data,
  };

  const response = await axios(config)
    .then(function (response) {
      console.log(response?.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  return response.data;
});

const initialState = {
  loading: false,
  responseDetails: {},
  error: "",
};

const loginPostSlice = createSlice({
  name: "login",
  initialState,

  reducers: {},
  //async action creator
  extraReducers: (builder) => {
    builder.addCase(postLoginData.pending, (state) => {
      state.loading = true;
      state.error = {};
    });
    builder.addCase(postLoginData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.settingDetails = action.payload;
    });
    builder.addCase(postLoginData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.settingDetails = "";
    });
  },
});

// const initialState = {};

// // Then, handle actions in your reducers:
// const dataSlice = createSlice({
//   name: "data",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     // Do something while pending if you want.
//     builder.addCase(postData.pending, (state, action) => {});
//     // Do something when passes.
//     builder.addCase(postData.fulfilled, (state, action) => {});
//     // Do something if fails.
//     builder.addCase(postData.rejected, (state, action) => {});
//   },
// });
