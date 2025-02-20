import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { bookUrl } from "../../urls"
export const fetchBooks=createAsyncThunk("books/fetchBooks",async()=>{
    const response =await axios.get(bookUrl)
    return response.data
})
 export const booksSlicer=createSlice({
    name:"books",
    initialState:{
        books:[],
        status:"idle",
        error:"null",
  
    },
    reducers:{},
    extraReducers:builder=>{
        builder.addCase(fetchBooks.pending,(state,action)=>{
            state.status="loading"
        })
        builder.addCase(fetchBooks.fulfilled,(state,action)=>{
            state.status="succeeded",
            state.books=action.payload
        })
        builder.addCase(fetchBooks.rejected,(state,action)=>{
            state.status="error",
            state.error=action.payload.error
        })
    }
})
export default booksSlicer.reducer