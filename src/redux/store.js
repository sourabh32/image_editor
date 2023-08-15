import { configureStore } from '@reduxjs/toolkit'
import filterReducer from "./slices/filterSlice"
import customReducer from "./slices/customSlice"
export const store = configureStore({
  reducer: {
   filterReducer,
   customReducer
  }
})