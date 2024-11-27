import { Route, Routes } from 'react-router'
import About from './About'
import './App.css'
import Conctect from './Conctect'
import Home from './Home'
import Menus from './Menus'
import { BrowserRouter } from 'react-router-dom'
import Fakeapi from './Fakeapi'

function App() {

  return (
    <>
      <Menus />
      {/* <Fakeapi/> */}

             <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/conctect' element={<Conctect />} />
        <Route path='/about' element={<About />} />


      </Routes>

    </>
  )
}

export default App
