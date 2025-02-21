const BookForm=({handleChange,bookData})=>{
    return(<>
       <label htmlFor="bookName">Book Name:</label>
        <input type="text" name="bookName" id="bookName" className="form-control" value={bookData.bookName} onChange={handleChange} required/>
        <label htmlFor="author">Author:</label>
        <input type="text" name="author" id="author" className="form-control" value={bookData.author} onChange={handleChange} required/>
        <label htmlFor="genre">Genre:</label>
        <input type="text" name="genre" id="genre" className="form-control" value={bookData.genre} onChange={handleChange} required/>
<button className="btn btn-primary my-3" type="submit">Add</button>
    </>)
}
export default BookForm;