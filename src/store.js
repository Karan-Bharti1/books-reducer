import { configureStore } from "@reduxjs/toolkit";
import{ booksSlicer }from "./features/books/booksSlicer";

export default configureStore({
reducer:{
    books:booksSlicer.reducer
}
})