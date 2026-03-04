import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className='flex justify-between items-center max-w-[1440px] mx-auto px-6 h-[73px]'>
            
            <div className="links flex justify-center items-center gap-6">
                <div className="flex gap-2">
                    <div className="w-[32px] h-[32px] bg-blue-500 rounded-[4px]">

                    </div>
                    <p className='text-[23px] text-blue-500 font-bold font-merriweather'>Blog Central</p>
                </div>
                <ul className="flex text-[14px] gap-6 max-sm:hidden">
                    <li><NavLink>Home</NavLink></li>
                    <li><NavLink>About</NavLink></li>
                    <li><NavLink>Blogs</NavLink></li>
                    <li><NavLink>Contact</NavLink></li>



                </ul>
            </div>
            <div className="authentication-buttons flex gap-2">
                <div className="w-[61px] h-[36px] flex justify-center items-center">

                    <NavLink className='text-[14px] '>Login</NavLink>
                </div>
                <div className="w-[70px] h-[36px] text-white rounded-[8px] hover:bg-white hover:text-blue-500 flex justify-center items-center bg-blue-500">

                    <NavLink className='text-[14px] '>Sign Up</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
