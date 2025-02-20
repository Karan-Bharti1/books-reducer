import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from './components/Header'
import BookView from './features/books/BookView'

function App() {


  return (
    <>
     <Header/>
     <main className="container">
      
     <BookView/>
     </main>
    </>
  )
}

export default App
