import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './page/Home'
import About from './page/About'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
