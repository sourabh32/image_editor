import { createSlice } from "@reduxjs/toolkit";


const customSlice = createSlice({
    name:"custom",
    initialState:{
        customObject:{}
    },
    reducers:{
        customFilter:(state,action)=>{
            console.log(action.payload)
            state.customObject = action.payload
        }
    }

})
export default customSlice.reducer
export const {customFilter} = customSlice.actions