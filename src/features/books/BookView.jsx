import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBooks } from "./booksSlicer";

const BookView=()=>{
    const dispatch=useDispatch()
    const state=useSelector(state=>state.books)
   console.log(state)
    useEffect(()=>{
dispatch(fetchBooks())
    },[])
    return(
        <>
        <h2 className="my-3">Book View</h2>
        <Link className="btn btn-primary" to="/addbook">Add Book</Link>
        {state.status=="loading" && <h2 className="my-4">Loading...</h2>}
        {state.status==="succeeded" && (<>
        <ul className="list-group my-4">
        {state.books.map(book=>(<li className="list-group-item" key={book._id}>{book.bookName}-Genre: {book.genre}-Author:{book.author}</li>))}
        </ul>
        </>)}
        </>
    )
}
export default BookView;