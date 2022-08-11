import { configureStore } from '@reduxjs/toolkit'
import { patientDataReducer,patientDetailsReducer } from '../features/Patient_redux/patientSlice'
import { settingDataReducer } from '../features/Settings_redux/settingSlice'
export const store = configureStore({
  reducer: {
    patientData:patientDataReducer,
    patientInfo:patientDetailsReducer,
    settingInfo:settingDataReducer,
  },
})