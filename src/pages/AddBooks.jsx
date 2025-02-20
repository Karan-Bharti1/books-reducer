import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";

const AddBooks=()=>{
    const [bookData,setBookData]=useState({
        bookName:"",
        author:"",
        genre:""
    })
    const handleChange=(event)=>{
const {name,value}=event.target
setBookData(prev=>({...prev,[name]:value}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(bookData)
    }
    
    return (<>
    <Header/>
    <main className="container">
        <h2 className="my-3">Add Book</h2>
        <Link className="btn btn-primary" to="/">Back To Books</Link>
        <form className="my-3" onSubmit={handleSubmit}>
            <label htmlFor="bookName">Book Name:</label>
        <input type="text" name="bookName" id="bookName" className="form-control" value={bookData.bookName} onChange={handleChange}/>
        <label htmlFor="author">Author:</label>
        <input type="text" name="author" id="author" className="form-control" value={bookData.author} onChange={handleChange}/>
        <label htmlFor="genre">Genre:</label>
        <input type="text" name="genre" id="genre" className="form-control" value={bookData.genre} onChange={handleChange}/>
<button className="btn btn-primary my-3">Add</button>
        </form>
      
        </main></>)
}
export default AddBooks;