import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <main>
        {/* hero */}
      <section className='grid-cols-2 h-screen'>
        <div className="">
            <div className="flex justify-center items-center w-[242px] h-[30px] bg-[#F0F7FFFF] rounded-3xl border border-[#067FF933]">
                <p className='font-sans text-[14px] text-blue-500'>The Future of Digital Content</p>
            </div>
            <h2 className="text-[72px] font-merriweather font-semibold">
                Discover Stories That <span className='text-blue-500 font-sans font-bold italic'>Inspire</span> Your Growth.
            </h2>
            <p className='text-[20px] font-merriweather text-gray-600'>Join our community of over 50,000 readers discovering daily insights on technology, lifestyle, and modern business.</p>
            <div className="flex ">
                <input type="text" />
                <div className='w-[207px] h-[56px] text-[18px] bg-blue-500 rounded-3xl flex justify-center items-center text-white'>Explore Blogs <img src="" alt="" /></div>
            </div>
            <div className="">
                <img src="" alt="" />
                <p className='text-[14px] font-merriweather text-gray-600'>Trusted by 50k+ writers worldwide</p>
            </div>
        </div>
        <div className=""></div>
      </section>
    </main>
  )
}

export default Home
