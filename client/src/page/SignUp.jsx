import React from 'react'
import { SiGooglechrome } from 'react-icons/si';
import { FaGithub } from "react-icons/fa";

const SignUp = () => {
  return (
    <main>
      <section className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      
      {/* Card */}
      <div className="w-[448px] h-[812px] bg-white rounded-[10px] 
                      shadow-[0px_0px_2px_#171a1f14,0px_8.5px_13.75px_#171a1f38] 
                      p-6 flex flex-col">
        
        <h1 className="text-2xl font-bold font-merriweather text-center mb-2">
          Create an Account
        </h1>

        <p className="text-center text-[16px] text-gray-500 mb-6">
          Join the community and start sharing your stories today.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-6 text-[14px]">
          <button className="flex-1 border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2">
            <span  className='text-[20px]'><SiGooglechrome/></span> Google
          </button>
          <button className="flex-1 border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2">
            <span className='text-[20px]'><FaGithub/></span> GitHub
          </button>
        </div>

        <div className="text-center text-[12px] font-sans text-gray-600 mb-4">
          OR CONTINUE WITH EMAIL
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
          <label htmlFor="" className='text-[14px] flex flex-col gap-[12px]'>
            Full Name
            <input
            type="text"
            placeholder="Full Name"
            className="border rounded-lg p-3 text-[14px]"
          />
          </label>
          
          <label htmlFor="" className='text-[14px] flex flex-col gap-[12px]'>
            Email
            <input
            type="email"
            placeholder="Email Address"
            className="border rounded-lg p-3 text-[14px]"
          />
          </label>
          

          <div className="flex gap-4" >
            <label htmlFor="" className='text-[14px] flex flex-col gap-[12px]'>
              Password
              <input
              type="password"
              placeholder="Password"
              className="border rounded-lg p-3 w-full text-[14px]"
            />
            </label>
            
            <label htmlFor="confirm-password" className='text-[14px] flex flex-col gap-[12px]'>Confirm
              <input
              type="password"
              placeholder="Confirm"
              className="border rounded-lg p-3 w-full text-[14px]"
            />
            </label>
            
          </div>
        </div>

        {/* Terms */}
        <div className="flex items-center gap-2 mt-6 text-sm">
          <input type="checkbox" className='size-[16px]'/>
          <span>
            I agree to the <span className='text-blue-500'>Terms of Service</span> and <span className='text-blue-500'>Privacy Policy.</span>
          </span>
        </div>

        {/* Button */}
        <button className="mt-8 bg-blue-600 text-white py-3 rounded-lg">
          Get Started →
        </button>

        {/* Footer */}
        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <span className="text-blue-600 cursor-pointer">
            Log in here
          </span>
        </p>
        <div className="flex justify-center mt-6">
        <p className='font-sans text-[10px] p-1 px-4 bg-gray-200  items-center rounded-3xl'>Secure 256-bit SSL Encryption</p>

        </div>
      </div>
    </section>

    </main>
  )
}

export default SignUp
