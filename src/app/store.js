import { configureStore } from "@reduxjs/toolkit";
import {
  patientDataReducer,
  patientDetailsReducer,
} from "../features/Patient_redux/patientSlice";
import { settingDataReducer } from "../features/Settings_redux/settingSlice";
import { serviceReducer } from "../features/Settings_redux/settingFeaturesSlice";
import { cptReducer } from "../features/Settings_redux/cptCodeSlice";
import { loginReducer } from "../features/login_redux/loginPostSlice";
import {
  createPosReducer,
  posReducer,
} from "../features/Settings_redux/placeOfServiceSlice";
import { authReducer } from "../features/login_redux/loginSlice";
import { apiSlice } from "../features/api/apiSlice";
import { serviceSubTypeReducer } from "../features/Settings_redux/selectedServiceSubTypesApi";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice(RTK query)
    // [apiSlice.reducerPath]: apiSlice.reducer,
    //async thunk reducers
    patientData: patientDataReducer,
    patientInfo: patientDetailsReducer,
    settingInfo: settingDataReducer,
    serviceInfo: serviceReducer,
    cptInfo: cptReducer,
    posInfo: posReducer,
    posCreated: createPosReducer,
    getServiceSubTypes: serviceSubTypeReducer,
    loginInfo: loginReducer,
    //normal reducers
    authInfo: authReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(apiSlice.middleware),
});
