import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name:"filter",
    initialState:{
        filterObject:{}
    },
    reducers:{
        changeFilter:(state,action)=>{
            state.filterObject = action.payload
        }
    }

})
export default filterSlice.reducer
export const {changeFilter} = filterSlice.actions