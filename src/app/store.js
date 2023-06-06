import { configureStore } from "@reduxjs/toolkit";
import { patientDetailsReducer } from "../features/Patient_redux/patientSlice";
import { settingDataReducer } from "../features/Settings_redux/settingSlice";
import { serviceReducer } from "../features/Settings_redux/settingServicesList";
import { cptReducer } from "../features/Settings_redux/cptCodeSlice";
import { loginReducer } from "../features/login_redux/loginPostSlice";
import { posReducer } from "../features/Settings_redux/placeOfServiceSlice";
import { authReducer } from "../features/login_redux/loginSlice";
import { apiSlice } from "../features/api/apiSlice";
import { serviceSubTypeReducer } from "../features/Settings_redux/selectedServiceSubTypesApi";
import { sideBarReducer } from "../features/Sidebar_redux/SidebarSlice";
import { vendorNumberReducer } from "../features/Settings_redux/vendorNumberSlice";
import { referringProviderReducer } from "../features/Settings_redux/referringProviderApi";
import { infoDetailsReducer } from "../features/PatientPortal/MyInfo_redux/myInfoSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice(RTK query)
    [apiSlice.reducerPath]: apiSlice.reducer,
    //async thunk reducers
    patientInfo: patientDetailsReducer,
    settingInfo: settingDataReducer,
    serviceInfo: serviceReducer,
    cptInfo: cptReducer,
    posInfo: posReducer,
    getServiceSubTypes: serviceSubTypeReducer,
    referringProviderInfo: referringProviderReducer,
    vendorNumberInfo: vendorNumberReducer,
    loginInfo: loginReducer,
    //Patient Portal async thunk reducers
    myInfo: infoDetailsReducer,
    //normal reducers
    authInfo: authReducer,
    sideBarInfo: sideBarReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
