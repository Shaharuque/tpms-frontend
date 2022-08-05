import { configureStore } from '@reduxjs/toolkit'
import { patientDataReducer } from '../features/Patient_redux/patientSlice'
export const store = configureStore({
  reducer: {
    patientData:patientDataReducer,
  },
})