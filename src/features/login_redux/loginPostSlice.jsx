import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const postLoginData = createAsyncThunk(
  "login/postLoginData",
  async (formData) => {
    try {
      const response = await fetch(
        "https://test-prod.therapypms.com/api/v1/internal/admin/login",
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
