import { configureStore } from "@reduxjs/toolkit";
import {
  patientDataReducer,
  patientDetailsReducer,
} from "../features/Patient_redux/patientSlice";
import { settingDataReducer } from "../features/Settings_redux/settingSlice";
import { emailDetailsReducer } from "../features/login_redux/loginSlice";
export const store = configureStore({
  reducer: {
    patientData: patientDataReducer,
    patientInfo: patientDetailsReducer,
    settingInfo: settingDataReducer,
    emailInfo: emailDetailsReducer,
  },
});
