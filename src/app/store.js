import { configureStore } from "@reduxjs/toolkit";
import {
  patientDataReducer,
  patientDetailsReducer,
} from "../features/Patient_redux/patientSlice";
import { settingDataReducer } from "../features/Settings_redux/settingSlice";
import { settingReducer } from "../features/Settings_redux/settingFeaturesSlice";
import { cptReducer } from "../features/Settings_redux/cptCodeSlice";
import { emailDetailsReducer } from "../features/login_redux/loginSlice";
import { loginReducer } from "../features/login_redux/loginPostSlice";
import {
  createPosReducer,
  posReducer,
} from "../features/Settings_redux/placeOfServiceSlice";
export const store = configureStore({
  reducer: {
    patientData: patientDataReducer,
    patientInfo: patientDetailsReducer,
    settingInfo: settingDataReducer,
    serviceInfo: settingReducer,
    cptInfo: cptReducer,
    posInfo: posReducer,
    posCreated: createPosReducer,
    loginInfo: loginReducer,
    emailInfo: emailDetailsReducer,
  },
});
