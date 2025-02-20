import { createSlice } from "@reduxjs/toolkit"

 export const booksSlicer=createSlice({
    name:"books",
    initialState:{
        books:[],
        status:"idle",
        error:"null",
  
    },
    reducers:{}
})
export default booksSlicer.reducer