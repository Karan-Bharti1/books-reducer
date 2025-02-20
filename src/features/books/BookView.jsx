import { Link } from "react-router-dom";

const BookView=()=>{
    return(
        <>
        <h2 className="my-3">Book View</h2>
        <Link className="btn btn-primary" to="/addbook">Add Book</Link>
        </>
    )
}
export default BookView;