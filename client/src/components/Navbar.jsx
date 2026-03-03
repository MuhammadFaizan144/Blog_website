import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className='flex justify-center items-center'>
            <div className="links">
                <div className="">
                    <img src="" alt="" />
                    <p>Blog Central</p>
                </div>
                <ul className="">
                    <li><NavLink>Home</NavLink></li>
                    <li><NavLink>About</NavLink></li>
                    <li><NavLink>Blogs</NavLink></li>
                    <li><NavLink>Contact</NavLink></li>



                </ul>
            </div>
            <div className="authentication-buttons">
                <NavLink>Login</NavLink>
                <NavLink>Sign Up</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
