import { configureStore } from '@reduxjs/toolkit'
import { patientDataReducer,patientDetailsReducer } from '../features/Patient_redux/patientSlice'
export const store = configureStore({
  reducer: {
    patientData:patientDataReducer,
    patientInfo:patientDetailsReducer,
  },
})