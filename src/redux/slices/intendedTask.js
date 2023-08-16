import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const doIntendedTask = createAsyncThunk(
  "bg/replace",
  async ({ form, endpoint }) => {
    try {
             const response = await axios.post(endpoint, form, {
          headers: {
            'x-api-key': import.meta.env.VITE_API_KEY , 
          },
          responseType: 'arraybuffer',
        });
                const blob = new Blob([response.data], { type: 'image/jpeg' });
        const blobUrl = URL.createObjectURL(blob);

        return blobUrl;

    } catch (error) {
      throw error
    }
  }
);



const intendedSlice = createSlice({name:"intendes/task",
initialState: {
  imageData: null,
  status: 'idle',
  error: null,
},reducers:{},
extraReducers:(builder)=>{
  builder.addCase(doIntendedTask.pending, (state) => {
    state.status = 'loading';
    state.error = null;
  })
  .addCase(doIntendedTask.fulfilled, (state,action)=>{
    state.status = 'succeeded';
    state.imageData = action.payload
  })
  .addCase(doIntendedTask.rejected, (state,action)=>{
    state.status = 'failed';
    state.error = action.error.message
  })
}

},


)

export default intendedSlice.reducer;
