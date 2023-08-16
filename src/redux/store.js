import { configureStore } from '@reduxjs/toolkit'
import filterReducer from "./slices/filterSlice"
import customReducer from "./slices/customSlice"
import intendedReducer from "./slices/intendedTask"
export const store = configureStore({
  reducer: {
   filterReducer,
   customReducer,
   intendedReducer
  }
})