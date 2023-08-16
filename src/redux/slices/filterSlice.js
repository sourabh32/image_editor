import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name:"filter",
    initialState:{
        filterObject:{}
    },
    reducers:{
        changeFilter:(state,action)=>{
            state.filterObject = action.payload
        },
        resetFilters:(state,action)=>{
            state.filterObject = {name:"none",class:""}
        }
    }

})
export default filterSlice.reducer
export const {changeFilter,resetFilters} = filterSlice.actions