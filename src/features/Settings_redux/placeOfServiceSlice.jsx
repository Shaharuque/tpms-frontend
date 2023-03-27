import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseIp } from "../../Misc/BaseClient";

//async thunk(fetchPOS) to fetch pos data list depending on page_ad
export const fetchPOS = createAsyncThunk(
  "settings/fetchPOS",
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
  isError: false,
  posData: {},
  posCreate: {},
  error: "",
};

const posSlice = createSlice({
  name: "settings",
  initialState,

  reducers: {},
  //In redux-toolkit when async thunk function returns a promise and redux toolkit gets that promise, it will autometically dispatch 3 action(promise.pending,promise.fullfilled,promise.rejected) by himself, extraReducers will listen to those actions and update state.
  extraReducers: (builder) => {
    builder.addCase(fetchPOS.pending, (state) => {
      state.loading = true;
      state.isError = false;
      state.error = "";
    });
    builder.addCase(fetchPOS.fulfilled, (state, action) => {
      state.loading = false;
      state.isError = false;
      state.error = "";
      state.posData = action.payload;
    });
    builder.addCase(fetchPOS.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
      state.error = action.error;
      state.posData = "";
    });
  },
});

export const posReducer = posSlice.reducer; //sliceName.reducer

//------create pos-------------
export const createPos = createAsyncThunk(
  "settings/createPos",
  async ({ formData, endPoint, token }) => {
    try {
      const response = await axios({
        method: "post",
        url: "https://test-prod.therapypms.com/api/v1/internal/admin/ac/setting/create/pos",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token || null,
        },
        data: formData,
      });
      return response.data;
    } catch (e) {
      console.log("Error", e.response.data);
      return e.response.data;
    }
  }
);

const createPosSlice = createSlice({
  name: "login",
  initialState,

  reducers: {
    clearState: (state) => {
      state.loading = false;
      state.error = {};
      return state;
    },
  },
  //async action creator
  extraReducers: (builder) => {
    builder.addCase(createPos.pending, (state) => {
      state.loading = true;
      state.error = {};
    });
    builder.addCase(createPos.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.posCreate = action.payload;
    });
    builder.addCase(createPos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.posCreate = "";
    });
  },
});

export const createPosReducer = createPosSlice.reducer; //sliceName.reducer
