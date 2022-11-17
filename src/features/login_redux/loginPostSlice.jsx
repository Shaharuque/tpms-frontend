import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { headers } from "../../Misc/BaseClient";

export const postLoginData = createAsyncThunk(
  "login/postLoginData",
  async (formData) => {
    try {
      const response = await fetch(
        "https://ovh.therapypms.com/api/v1/admin/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: JSON.stringify(formData),
        }
      );
      let data = await response.json();
      console.log("response", data);
      if (response.status === 200) {
        localStorage.setItem("adminToken", data?.access_token);
        return data;
      }
    } catch (e) {
      console.log("Error", e.response.data);
    }
  }
);

const initialState = {
  isloading: false,
  result: {},
  iserror: "",
};

const loginPostSlice = createSlice({
  name: "login",
  initialState,

  reducers: {
    clearState: (state) => {
      state.isloading = false;
      state.iserror = {};
      return state;
    },
  },
  //async action creator
  extraReducers: (builder) => {
    builder.addCase(postLoginData.pending, (state) => {
      state.isloading = true;
      state.iserror = {};
    });
    builder.addCase(postLoginData.fulfilled, (state, action) => {
      state.isloading = false;
      state.iserror = {};
      state.result = action.payload;
    });
    builder.addCase(postLoginData.rejected, (state, action) => {
      state.isloading = false;
      state.iserror = action.error;
      state.result = "";
    });
  },
});

export const loginReducer = loginPostSlice.reducer; //sliceName.reducer

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
