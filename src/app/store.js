import { configureStore } from "@reduxjs/toolkit";
import {
  patientDataReducer,
  patientDetailsReducer,
} from "../features/Patient_redux/patientSlice";
import { settingDataReducer } from "../features/Settings_redux/settingSlice";
import { settingReducer } from "../features/Settings_redux/settingFeaturesSlice";
import { emailDetailsReducer } from "../features/login_redux/loginSlice";
import { loginReducer } from "../features/login_redux/loginPostSlice";
export const store = configureStore({
  reducer: {
    patientData: patientDataReducer,
    patientInfo: patientDetailsReducer,
    settingInfo: settingDataReducer,
    settingFeatureInfo: settingReducer,
    loginInfo: loginReducer,
    emailInfo: emailDetailsReducer,
  },
});
