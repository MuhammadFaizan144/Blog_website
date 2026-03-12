import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdSearch } from 'react-icons/md'; 
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <main className='flex justify-center items-center '>
        {/* hero */}
      <section className='grid grid-cols-2 max-w-[1440px] h-[825px]'>
        <div className="flex flex-col gap-[30px]">
            <div className="flex justify-center items-center w-[242px] h-[30px] bg-[#F0F7FFFF] rounded-3xl border border-[#067FF933]">
                <p className='font-sans text-[14px] text-blue-500'>The Future of Digital Content</p>
            </div>
            <h2 className="text-[72px] font-merriweather font-bold leading-[72px] max-w[545px]">
                Discover Stories That <span className='text-blue-500 font-sans font-bold italic'>Inspire</span> Your Growth.
            </h2>
            <p className='text-[20px] font-merriweather text-gray-600 max-w-[488px]'>Join our community of over 50,000 readers discovering daily insights on technology, lifestyle, and modern business.</p>
            <div className="flex gap-3">
                <div className="flex px-4 border border-[#DEE1E6FF] items-center w-[320px] h-[56px] rounded-3xl">
                  <MdSearch className='text-[25px] text-gray-500'/>
                  <input className='' type="text" placeholder='Search your interest...'/>
                </div>
                <div className='w-[207px] h-[56px] text-[18px] bg-blue-500 rounded-3xl flex justify-center items-center text-white gap-2'>Explore Blogs <FaArrowRight className='text-[16px]'/> </div>
            </div>
            <div className="">
                <img src="" alt="" />
                <p className='text-[14px] font-merriweather text-gray-600'>Trusted by 50k+ writers worldwide</p>
            </div>
        </div>
        <div className="">
          <div className="w-[544px] h-[584px] bg-black"></div>
        </div>
      </section>
    </main>
  )
}

export default Home
