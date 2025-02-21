import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postBook } from "../features/books/booksSlicer";
import BookForm from "../components/BookForm";

const AddBooks=()=>{
    const [bookData,setBookData]=useState({
        bookName:"",
        author:"",
        genre:""
    })
    const [message,setMessage]=useState("")
    const dispatch=useDispatch()
    const state=useSelector(state=>state.books)
    const handleChange=(event)=>{
const {name,value}=event.target
setBookData(prev=>({...prev,[name]:value}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
      dispatch(postBook(bookData))
      if(state.status==="succeeded")
     { setMessage("Data Posted Successfully") 
      setBookData({
        bookName:"",
        author:"",
        genre:""
    })
    setTimeout(()=>{
        setMessage("")
    },2000)}
    
    }
    
    return (<>
    <Header/>
    <main className="container">
        <h2 className="my-3">Add Book</h2>
        <Link className="btn btn-primary" to="/">Back To Books</Link>
        <form className="my-3" onSubmit={handleSubmit}>
         <BookForm handleChange={handleChange} bookData={bookData}/>
        </form>
      <h2>{message}</h2>
    { state.status=="error" && <h2>Failed to add Book to the database</h2>}
        </main></>)
}
export default AddBooks;