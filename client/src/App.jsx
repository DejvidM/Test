import { BrowserRouter, Routes , Route} from 'react-router-dom'
import './App.css'
import MainPage from './components/MainPage'
import About from './components/Nav/About'
import Contact from './components/Nav/Contact'
import Administrator from './components/admin/Administrator'
import Edit from './components/admin/Edit'

function App() {

  return (
    <>
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<MainPage /> } />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/admin' element={<Administrator />} />
        <Route path='/edit/:item/:type' element={<Edit />} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
