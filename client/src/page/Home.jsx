import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdSearch } from 'react-icons/md';
import { FaArrowRight } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";



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
  const articles = [
    {
      category: "Technology",
      title: "10 Essential Tools for Modern Developers in 2024",
      desc: "From AI pair programmers to streamlined deployment pipelines, these tools are changing the game.",
      author: "Alex Rivera",
      date: "Oct 12, 2024",
      read: "6 min read",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      pfpImg:"/images/01.avif"
    },
    {
      category: "Lifestyle",
      title: "The Art of Slow Living in a Fast-Paced World",
      desc: "Discover the psychological benefits of mindfulness and intentionality in your daily routine.",
      author: "Elena Rossi",
      date: "Oct 10, 2024",
      read: "4 min read",
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      pfpImg:"/images/02.avif"
    },
    {
      category: "Business",
      title: "Scaling Your Startup: From Seed to Series A",
      desc: "Key metrics and cultural shifts every founder needs to manage during growth.",
      author: "David Chen",
      date: "Oct 08, 2024",
      read: "9 min read",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      pfpImg:"/images/03.avif"
    },
    {
      category: "Design",
      title: "Why Minimalism is Still Dominating UI Design",
      desc: "An analysis of modern interfaces and why 'less is more' still works.",
      author: "Sophie Martin",
      date: "Oct 05, 2024",
      read: "5 min read",
      img: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
      pfpImg:"/images/04.jpg"
    },
    {
      category: "Productivity",
      title: "The Deep Work Method: Reclaiming Your Focus",
      desc: "How to block distractions and produce your best work in shorter periods.",
      author: "Marcus Thorne",
      date: "Oct 03, 2024",
      read: "8 min read",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      pfpImg:"/images/05.avif"
    },
    {
      category: "Health",
      title: "Sustainable Nutrition: Eating for Your Health and the Planet",
      desc: "Balancing diet with environmental impact through smart choices.",
      author: "Dr. Anna Lee",
      date: "Sep 30, 2024",
      read: "7 min read",
      img: "https://images.unsplash.com/photo-1506806732259-39c2d0268443",
      pfpImg:"/images/06.avif"
    }
  ];


  return (
    <main className="flex flex-col justify-center items-center max-w-[1440px] mx-auto">
      {/* hero */}
      <section className="grid grid-cols-2 max-lg:grid-cols-1  w-full pb-28 pt-16  gap-10">

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
      <section className='flex justify-center items-center flex-col  gap-4 bg-gray-100 w-screen py-10'>
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
      {/* Featured Editorial */}
      <section className='flex flex-col justify-center p-10 lg:p-20 gap-8 lg:gap-14'>
        <div className="">
          <h2 className='text-[30px] font-merriweather font-bold'>Featured Editorial</h2>
          <p className='text-[18px] text-gray-600'>Hand-picked stories from our senior editors</p>
        </div>

        <div className="grid grid-cols-2 max-lg:grid-cols-1 bg-blue-100 ">
          <div className=""><img src="/images/building.jpg" alt="" className='w-[592px] h-[669px] rounded-md' /></div>
          <div className="max-w-[1184px] p-6 lg:p-16">
            <span className="rounded-3xl text-white font-semibold px-[30px] py-[4px] text-[12px] bg-blue-500 hover:bg-gray-600">Special Feature</span>
            <h5 className='text-[36px] mt-3 font-merriweather font-bold max-w-[439px]'>The Decentralized Future: How Blockchain is Reimagining the Internet for Creators.</h5>
            <p className='text-[18px] mt-4 text-gray-600 max-w-[471px]'>As we move beyond the gatekeepers of Web 2.0, a new paradigm is emerging. Discover how decentralized protocols are returning power to the individual writer and artist in 2024 and beyond.</p>
            <div className="flex mt-4 gap-3">
              <img src="/images/hero-circle-pic.webp" alt="" className='size-[48px] rounded-full ' />
              <div className="">
                <h6 className='text-[16px] text-black'>Sarah Jenkins</h6>
                <p className='text-[14px] text-gray-600'>Editor-in-Chief • 12 min read</p>
              </div>
            </div>
            <button className='text-[14px] mt-4 text-white px-[32px] py-[10px] bg-blue-500 rounded-3xl hover:bg-white hover:text-blue-500'>Read Full Story</button>
          </div>
        </div>
      </section>
      {/* Latest Articles */}
      <section className='flex flex-col p-20 w-full gap-14'>
        <div className=' flex justify-between '>
          <div className="">
            <h2 className='text-[30px] font-merriweather font-bold'>Latest Articles</h2>
            <p className='text-[18px] text-gray-600' >Stay updated with the freshest perspectives</p>
          </div>
          <button className='flex items-center border-none text-blue-500 hover:bg-blue-100 w-[169px] h-[40px] text-[14px] px-[16px] gap-4 relative top-5'>Browse All Blogs <span className='text-[10px]'><FaAngleRight /></span></button>
        </div>
        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((item, index) => (
              <div
                key={index}
                className="bg-white max-w-[368px] h-[471px] rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={item.img}
                    alt=""
                    className="max-w-[368px] h-[230px] object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-white text-sm px-3 py-1 rounded-full shadow">
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="font-merriweather text-[20px] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-[14px]">{item.desc}</p>

                  {/* Footer */}
                  <div className="flex justify-between items-center text-sm text-gray-400 mt-3">
                    <div className='flex items-center gap-2'>
                      <img src={item.pfpImg} alt="" className='size-[32px] rounded-full object-cover' />
                      <div >
                        <p className="font-medium text-gray-600 text-[12px]">{item.author}</p>
                        <p className='text-[10px]'>{item.date}</p>
                      </div>

                    </div>
                    <span className='text-[12px]'>{item.read}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  )
}

export default Home
