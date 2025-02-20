import { Link } from "react-router-dom";
import Header from "../components/Header";

const AddBooks=()=>{
    return (<>
    <Header/>
    <main className="container">
        <h2 className="my-3">Add Book</h2>
        <Link className="btn btn-primary" to="/">Back To Books</Link>
        </main></>)
}
export default AddBooks;