import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdMenu ,MdClose} from 'react-icons/md'
const Navbar = () => {
    const[menuOpen,setMenuOpen]=useState(false)
    return (
        <nav className="w-full border-b border-b-[#DEE1E6FF]">
  <div className='flex justify-between items-center max-w-[1440px] mx-auto px-6 max-sm:px-2 h-[73px]'>

    <div className="links flex justify-center items-center gap-6">
      <div className="flex gap-2">
        <div className="w-[38px] h-[38px] bg-blue-500 rounded-[4px] flex items-center justify-center">
          <img src="/images/logo.png" alt="" className='size-[32px]'/>
        </div>
        <p className='text-[23px] text-blue-500 font-bold font-merriweather'>Blog Central</p>
      </div>

      <ul className="flex text-[14px] gap-6 max-sm:hidden">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink>Blogs</NavLink></li>
        <li><NavLink>Contact</NavLink></li>
      </ul>
    </div>

    <div className="authentication-buttons flex gap-2 max-sm:hidden">
      <div className="w-[61px] h-[36px] flex justify-center items-center">
        <NavLink className='text-[14px]'>Login</NavLink>
      </div>

      <div className="w-[70px] h-[36px] text-white rounded-[8px] active:bg-blue-800 hover:bg-white hover:text-blue-500 flex justify-center items-center bg-blue-500">
        <NavLink className='text-[14px]'>Sign Up</NavLink>
      </div>
    </div>

    <button className='sm:hidden text-[25px] font-bold' onClick={() => setMenuOpen(!menuOpen)}>
      {!menuOpen ? <MdMenu /> : <MdClose />}
    </button>
  </div>

  {menuOpen && (
    <div className="absolute top-[73px] left-0 w-full bg-white shadow-md sm:hidden">
      <ul className="flex flex-col items-center gap-4 py-6">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/">Blogs</NavLink></li>
        <li><NavLink to="/">Contact</NavLink></li>

        <NavLink className="text-[14px]">Login</NavLink>
        <NavLink className="text-[14px] bg-blue-500 text-white px-4 py-2 rounded-lg">
          Sign Up
        </NavLink>
      </ul>
    </div>
  )}
</nav>
    )
}

export default Navbar
