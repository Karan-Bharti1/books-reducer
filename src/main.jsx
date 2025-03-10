import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import AddBooks from './pages/AddBooks.jsx'
import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import store from './store.js'
import EditDataForm from './pages/EditDataForm.jsx'
const router=createBrowserRouter([{
  element:<App/>,
  path:"/"
},{
  element:<AddBooks/>,
  path:"/addbook"
},{
  element:<EditDataForm/>,
  path:"/editbook"
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider  store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
