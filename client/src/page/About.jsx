import React from 'react'
import { MdSearch } from 'react-icons/md';
import { FaArrowRight } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

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
        </main>
    )
}

export default About
