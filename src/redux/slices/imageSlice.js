import { createSlice } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from '@reduxjs/toolkit';

  
const imageSlice = createSlice({
    name:"filter",
    initialState:{
        imageObject:null
    },
    reducers:{
        changeImage:(state,action)=>{
            state.imageObject = action.payload
        },
        resetImage:(state,action)=>{
            state.imageObject = null
        }
    }

})
export default imageSlice.reducer
export const {changeImage,resetImage} = imageSlice.actions