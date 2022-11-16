import { configureStore } from "@reduxjs/toolkit";
import {
  patientDataReducer,
  patientDetailsReducer,
} from "../features/Patient_redux/patientSlice";
import { settingDataReducer } from "../features/Settings_redux/settingSlice";
import { emailDetailsReducer } from "../features/login_redux/loginSlice";
import { loginReducer } from "../features/login_redux/loginPostSlice";
export const store = configureStore({
  reducer: {
    patientData: patientDataReducer,
    patientInfo: patientDetailsReducer,
    settingInfo: settingDataReducer,
    loginInfo: loginReducer,
    emailInfo: emailDetailsReducer,
  },
});
