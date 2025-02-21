import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import BookForm from "../components/BookForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateData } from "../features/books/booksSlicer";

const EditDataForm=()=>{
    const dispatch=useDispatch()
    const location=useLocation()
  const book=location.state
  const [bookData,setBookData]=useState(book)
  const handleChange=(event)=>{
    const {name,value}=event.target
    setBookData(prev=>({...prev,[name]:value}))
        }
        const handleSubmit=e=>{
            e.preventDefault()
            dispatch(updateData({id:book._id,data:bookData}))
        }
    return(<>
    <Header/>
    <main className="container">
        <h2 className="my-3">Edit Book Details</h2>
        <Link to="/" className="btn btn-primary">Back to Books</Link>
        <form className="my-3" onSubmit={handleSubmit}>
        
<BookForm bookData={bookData} handleChange={handleChange}/>
</form>
    </main>
    </>)
}
export default EditDataForm;