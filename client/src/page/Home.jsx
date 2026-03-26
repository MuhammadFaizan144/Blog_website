import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdSearch } from 'react-icons/md';
import { FaArrowRight } from "react-icons/fa6";



const Home = () => {
  const TrendingCategories = [
    "Technology",
    "Lifestyle",
    "Business",
    "Health",
    "Education",
    "Travel",
    "Design",
    "Productivity"
  ]
  return (
    <main className="flex flex-col justify-center items-center">
      {/* hero */}
      <section className="grid grid-cols-2 max-lg:grid-cols-1 max-w-[1440px] w-full pb-28 pt-16  gap-10">

        {/* LEFT */}
        <div className="flex flex-col gap-6 justify-center max-lg:px-20 max-sm:px-5">

          <div className="flex justify-center items-center w-[242px] h-[30px] bg-[#F0F7FFFF] rounded-3xl border border-[#067FF933]">
            <p className="text-[14px] text-blue-500">
              The Future of Digital Content
            </p>
          </div>

          <h2 className="text-[72px] max-lg:text-[48px] max-sm:text-[36px] font-bold leading-tight max-w-[545px]">
            Discover Stories That{" "}
            <span className="text-blue-500 italic">
              Inspire
            </span>{" "}
            Your Growth.
          </h2>

          <p className="text-[20px] max-sm:text-[16px] text-gray-600 max-w-[488px]">
            Join our community of over 50,000 readers discovering daily insights on technology, lifestyle, and modern business.
          </p>

          {/* SEARCH + BUTTON */}
          <div className="flex gap-3 mt-4 max-sm:flex-col">

            <div className="flex px-4 border border-[#DEE1E6FF] items-center w-full max-w-[320px] h-[56px] rounded-3xl">
              <MdSearch className="text-[20px] text-gray-500" />
              <input
                className="ml-2 w-full outline-none"
                type="text"
                placeholder="Search your interest..."
              />
            </div>

            <div className="w-full max-w-[207px] h-[56px] text-[16px] bg-blue-500 rounded-3xl flex justify-center items-center text-white gap-2 cursor-pointer">
              Explore Blogs <FaArrowRight />
            </div>

          </div>

          {/* USERS */}
          <div className="flex items-center gap-3 mt-3">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src="/images/hero-circle-pic.webp"
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>

            <p className="text-[14px] text-gray-600">
              Trusted by 50k+ writers worldwide
            </p>
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex justify-center items-center ">

          <div className="relative w-full max-w-[560px] rounded-3xl shadow-[0px_25px_50px_#067FF91A] p-2 bg-white">
            <img
              src="/images/hero.jpg"
              alt=""
              className="w-full h-auto rounded-2xl object-cover"
            />
            <div className="w-[200px]  absolute font-sans border border-[#DEE1E6FF] bg-white rounded-lg left-[-40px] bottom-[-40px] max-sm:left-[0px] flex flex-col items-center p-5 gap-2 shadow-[0px_0px_2px_#171a1f14,0px_8.5px_13.75px_#171a1f38]">
              <h6 className="text-[14px] text-black">Trending Now</h6>
              <p className="text-[12px] text-gray-600">
                AI in Creative Writing reached 1.2k reads today!
              </p>
            </div>
          </div>

          {/* FLOAT CARD */}


        </div>

      </section>
      {/* TRENDING */}
      <section className='flex justify-center items-center flex-col  gap-4 bg-gray-100 w-full py-10'>
        <div className="flex">
          <h6 className='text-[14px] px-[21px] py-[10px] text-gray-600 font-semibold'>Trending:</h6>
          <ul className='flex flex-wrap gap-3 '>
            {TrendingCategories.map((category, index) => {
              return (<li key={index} className='text-[14px] px-[21px] py-[10px] text-gray-700 hover:text-gray-200 hover:bg-gray-600 bg-gray-200 rounded-3xl'>
                {category}
              </li>);
            })}
          </ul>
        </div>
        <div className="text-[14px] text-blue-500 hover:bg-blue-100 font-semibold px-[21px] py-[10px] rounded-3xl">
          View All Categories
        </div>
      </section>
    </main>
  )
}

export default Home
