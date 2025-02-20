import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { bookUrl } from "../../urls"
export const fetchBooks=createAsyncThunk("books/fetchBooks",async()=>{
    const response =await axios.get(bookUrl)
    return response.data
})
export const postBook=createAsyncThunk("books/postBooks",async(data)=>{
    const response=await axios.post(bookUrl,data,{
        method:'POST'
        ,headers:{
            'Content-Type':'application/json'
        }
    })
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
        builder.addCase(postBook.pending,state=>{
            state.status="loading"
        })
        builder.addCase(postBook.fulfilled,(state,action)=>{
            state.status="succeeded",
            state.books=state.books.filter(book=>book._id!=action.payload._id)   
        })
        builder.addCase(postBook.rejected,(state,action)=>{
            state.status="error",
            state.error=action.payload.error
        })
    }
})
export default booksSlicer.reducer