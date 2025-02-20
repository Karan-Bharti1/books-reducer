import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import AddBooks from './pages/AddBooks.jsx'
import { RouterProvider } from 'react-router'
const router=createBrowserRouter([{
  element:<App/>,
  path:"/"
},{
  element:<AddBooks/>,
  path:"/addbook"
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
