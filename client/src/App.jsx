import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
