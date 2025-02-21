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
  console.log(response)
    return response.data
})
export const updateData=createAsyncThunk("books/update",async({id,data})=>{
    const response=await axios.put(`${bookUrl}/${id}`,data,{
    headers:{
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
            
            state.error=action.payload
           
        })
        builder.addCase(postBook.pending,state=>{
            state.status="loading"
        })
        builder.addCase(postBook.fulfilled,(state,action)=>{
            state.status="succeeded",
            state.books.push(action.payload)
        })
        builder.addCase(postBook.rejected,(state,action)=>{
            state.status="error",
            state.error=action.payload
        })
        builder.addCase(updateData.pending,state=>{
            state.status="loading"
        })
        builder.addCase(updateData.fulfilled,(state,action)=>{
            state.status="succeeded"
            const index=state.books.findIndex(book=>book._id===action.payload._id)
           if(index!==-1){
state.books[index]=action.payload
           }
            
        })
        builder.addCase(updateData.rejected,(state,action)=>{
            state.status="error"
            state.error=action.payload
        })
    }
})
export default booksSlicer.reducer