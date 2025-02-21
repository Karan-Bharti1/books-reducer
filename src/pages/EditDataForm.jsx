import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import BookForm from "../components/BookForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../features/books/booksSlicer";

const EditDataForm=()=>{
    const [successMessage,setSuccessMessage]=useState("")
    const books=useSelector(state=>state.books)
    console.log(books)
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
           if(books.status==="succeeded" ){
            setSuccessMessage("Data Updated Successfully")
setTimeout(()=>setSuccessMessage(""),1500)
           }
        }
    return(<>
    <Header/>
    <main className="container">
        <h2 className="my-3">Edit Book Details</h2>
        <Link to="/" className="btn btn-primary">Back to Books</Link>
        <form className="my-3" onSubmit={handleSubmit}>
        
<BookForm bookData={bookData} handleChange={handleChange}/>
</form>
<h2 className="my-3">{successMessage}</h2>
{books.status==="error" && <h2 className="text-danger my-3">Failed to update data</h2>}
    </main>
    </>)
}
export default EditDataForm;