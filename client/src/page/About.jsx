import React from 'react'
import { MdSearch } from 'react-icons/md';
import { FaArrowRight } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useState } from 'react';
const OurValue = [
    {
        iconImage: "",
        heading: "Radical Authenticity",
        desciption: "We prioritize genuine human connection over algorithms, encouraging authors to speak their true minds.",

    },
    {
        iconImage: "",
        heading: "Continuous Growth",
        desciption: "A space for everyone. We actively work to amplify underrepresented voices and foster safe dialogue.",

    },
    {
        iconImage: "",
        heading: "Radical Authenticity",
        desciption: "Innovation never stops. We constantly evolve our platform to provide the best tools for modern creators.",

    }
]
const Meet = [
    {
        Image: "/images/Meet01.avif",
        name: "Sarah Mitchell",
        position: "Founder & CEO",
        desciption: "Passionate about the intersection of technology and storytelling. Former editor at TechDaily."
    },
    {
        Image: "/images/Meet02.avif",
        name: "David Chen",
        position: "Head of Product",
        desciption: "Building intuitive tools for the next generation of creators. Coffee enthusiast and world traveler."
    },
    {
        Image: "/images/Meet03.avif",
        name: "Elena Rodriguez",
        position: "Community Lead",
        desciption: "Ensuring every voice is heard. Dedicated to fostering a safe and engaging environment for our users."
    },
    {
        Image: "/images/Meet04.jpg",
        name: "Marcus Thorne",
        position: "Chief Technology Officer",
        desciption: "Scalability is my middle name. Obsessed with performance and elegant architecture."
    },
    {
        Image: "/images/Meet05.avif",
        name: "Aisha Khan",
        position: "Lead Designer",
        desciption: "Making the complex simple. Believes that good design is invisible and user-centric."
    },
    {
        Image: "/images/Meet06.jpg",
        name: "Jordan Blake",
        position: "Senior Editor",
        desciption: "A stickler for grammar and a lover of long-form journalism. Always looking for the next big story."
    }
]
const About = () => {
    return (
        <main className='flex flex-col justify-center items-center max-w-[1440px] mx-auto'>
            <section className="grid grid-cols-2 max-lg:grid-cols-1  w-full pb-28 pt-24  gap-8">

                {/* LEFT */}
                <div className="flex flex-col gap-6 justify-center max-lg:px-20 max-sm:px-5">

                    <div className="flex justify-center items-center w-[242px] h-[30px] bg-[#F0F7FFFF] rounded-3xl border border-[#067FF933]">
                        <p className="text-[14px] text-blue-500">
                            About Blog Central
                        </p>
                    </div>

                    <h2 className="font-bold font-merriweather text-[72px] max-lg:text-[48px] max-sm:text-[36px] leading-[5rem] max-w-[545px]">
                        Empowering{" "}
                        <span className="font-sans text-blue-500 font-extrabold">
                            Voices
                        </span>{" "}
                        Around the Globe.
                    </h2>
                    <div className="flex flex-col gap-10 max-w-[544px] h-auto border bg-[#FAFAFBFF] border-[#DEE1E6FF] p-4 rounded-2xl">
                        <p className='text-gray-600 italic text-[20px] font-merriweather'>"Our platform isn't just about publishing words; it's about building a community where ideas flourish and diverse perspectives are celebrated every single day."</p>
                        <p className='text-black text-[16px] font-sans'>— Sarah J. Mitchell, Founder</p>
                    </div>


                </div>

                {/* RIGHT */}
                <div className="flex justify-center items-center ">

                    <div className="relative w-full max-w-[560px] rounded-3xl shadow-[0px_25px_50px_#067FF91A] p-2 bg-white">
                        <img
                            src="/images/aboutPeople.avif"
                            alt=""
                            className="w-[544px] h-[500px] rounded-2xl object-cover"
                        />
                    </div>

                    {/* FLOAT CARD */}


                </div>

            </section>
            <section className='w-screen bg-[#FAFAFBFF] py-24'>
                <div className="flex flex-col justify-center items-center max-w-[1440px] mx-auto">
                    <div className="flex flex-col items-center">
                        <h2 className='font-merriweather text-[36px]'>Our Core Values</h2>
                        <p className='text-[18px] text-gray-600'>The principles that guide every feature we build and every story we share.</p>
                    </div>
                    <div className=" grid xl:grid-cols-3 grid-cols-1 gap-36 mt-24">
                        {OurValue.map((item, index) => {
                            return (<li key={index} className='list-none flex flex-col gap-4 w-[350px]'>
                                <div className="size-[48px] bg-[#067FF91A] rounded-[10px]">{item.iconImage}</div>
                                <h2 className="text-black text-[20px] font-merriweather">{item.heading}</h2>
                                <p className='text-gray-600 text-[16px] font-merriweather'>{item.desciption}</p>
                            </li>)
                        })}
                    </div>
                </div>
            </section>

            <section className='bg-slate-100 w-screen py-24 p-4'>
                <div className=" max-w-[1440px] mx-auto flex flex-col gap-16 items-center">
                    <div className="flex flex-col items-center">
                        <h2 className='text-[36px] font-merriweather text-black'>Meet the Visionaries</h2>
                        <p className='text-[18px] font-sans text-gray-600'>The dedicated team of writers, developers, and designers working behind the scenes.</p>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                        {Meet.map((item, index) => {
                            return (<li key={index} className='flex flex-col gap-4 items-center p-10 list-none max-w-[363px] bg-white border border-[#171a1f14] rounded-[10px]'>
                                <img src={item.Image} className='size-[80px] rounded-full object-cover' />
                                <div className="flex flex-col  items-center">
                                    <p className='text-[36px] font-merriweather text-black'>{item.name}</p>
                                    <span className='bg-gray-200 rounded-3xl px-2 py-1 text-[12px] font-sans text-black'>{item.position}</span>
                                </div>

                                <p className='text-[14px] font-sans text-gray-600 italic text-center'>"{item.desciption}"</p>
                            </li>)
                        })}
                    </div>
                    <p className='text-[16px] font-sans text-black'>Join our growing team</p>
                </div>

            </section>
            <section className='flex justify-center items-center py-28 px-4'>
                <div className="w bg-blue-500 text-white flex flex-col items-center gap-10 py-16 px-32 rounded-[32px]">

                    <p className='font-bold font-merriweather text-[36px] text-center'>
                        Ready to start your own story?
                    </p>

                    <p className='text-[18px] font-sans max-w-[552px] text-center'>
                        Join thousands of authors who have already found their home at Blog Central. It's free to start and takes less than a minute.
                    </p>

                    <div className="flex gap-4 flex-wrap justify-center">
                        <button className='text-black h-12 px-8 flex items-center justify-center bg-white rounded-[6px] '>
                            Get Started Today
                        </button>
                        <button className='h-12 px-8 flex items-center justify-center border border-white hover:border-gray-300 focus:border-grey-900 rounded-[6px]'>
                            Browse Articles
                        </button>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default About
