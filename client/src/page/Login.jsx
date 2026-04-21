import React from 'react'
import { SiGooglechrome } from 'react-icons/si';
import { FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <main>
          <section className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
          
          {/* Card */}
          <div className="w-[448px] h-[728px] bg-white rounded-[10px] 
                          shadow-[0px_0px_2px_#171a1f14,0px_8.5px_13.75px_#171a1f38] 
                          p-6 flex flex-col">
            
            <h1 className="text-2xl font-bold font-merriweather text-center mb-2">
              Welcome Back
            </h1>
    
            <p className="text-center text-[16px] text-gray-500 mb-6">
              Enter your credentials to access your account
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
            <div className="">
              
              
              <label htmlFor="" className='text-[14px] flex flex-col gap-[12px]'>
                Email
                <input
                type="email"
                placeholder="Email Address"
                className="border rounded-lg p-3 text-[14px]"
              />
              </label>
              
    
              <div className="mt-4" >
                <label htmlFor="" className='text-[14px] flex flex-col gap-[12px]'>
                  Password
                  <input
                  type="password"
                  placeholder="Password"
                  className="border rounded-lg p-3 w-full text-[14px]"
                />
                
                </label>
                
                
                
              </div>
            </div>
    
            {/* Terms */}
            <div className="flex items-center gap-2 mt-6 text-sm">
              <input type="checkbox" className='size-[16px]'/>
              <span>
                Remember me for 30 days
              </span>
            </div>
    
            {/* Button */}
            <button className="mt-8 bg-blue-600 text-white py-3 rounded-lg">
              Get Started →
            </button>
    
            {/* Footer */}
            <p className="text-center text-sm mt-6">
              Don't have an account? {" "}
              <span className="text-blue-600 cursor-pointer">
                Create an account
              </span>
            </p>
            <div className="flex justify-center mt-6">
            <p className='font-sans text-[11px] text-gray-500 px-7'>By clicking continue, you agree to our <span className='underline'>Terms of Service</span> and <span className='underline'>Privacy Policy.</span></p>
    
            </div>
          </div>
        </section>
    
        </main>
  )
}

export default Login
