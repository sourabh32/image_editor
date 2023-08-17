import { configureStore } from '@reduxjs/toolkit'
import filterReducer from "./slices/filterSlice"
import customReducer from "./slices/customSlice"
import intendedReducer from "./slices/intendedTask"
import imageReducer from  "./slices/imageSlice"
import { getDefaultMiddleware } from '@reduxjs/toolkit';
export const store = configureStore({
  reducer: {
   filterReducer,
   customReducer,
   intendedReducer,
   imageReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})