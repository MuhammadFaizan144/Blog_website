import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFB] flex justify-center">
      {/* Container */}
      <div className="w-full max-w-[1440px] px-6 sm:px-10 lg:px-20 py-12 lg:py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo + Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-[38px] h-[38px] bg-blue-500 rounded-[4px] flex items-center justify-center">
          <img src="/images/logo.png" alt="" className='size-[32px]'/>
        </div>
              <h2 className="text-[23px] text-blue-500 font-bold font-merriweather">
                Blog Central
              </h2>
            </div>

            <p className="text-gray-600 text-sm leading-6">
              Your daily destination for insightful articles, professional
              advice, and community stories. Join our growing community of
              readers and writers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Quick Links</h3>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">Home</li>
              <li className="hover:text-blue-600 cursor-pointer">About Us</li>
              <li className="hover:text-blue-600 cursor-pointer">Latest Blogs</li>
              <li className="hover:text-blue-600 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Contact Info</h3>

            <ul className="space-y-3 text-gray-600 text-sm">

              <li className="flex items-center gap-3">
                <HiOutlineLocationMarker className="text-lg" />
                123 Blog St, Content City
              </li>

              <li className="flex items-center gap-3">
                <HiOutlinePhone className="text-lg" />
                +1 (555) 000-0000
              </li>

              <li className="flex items-center gap-3">
                <HiOutlineMail className="text-lg" />
                hello@blogcentral.com
              </li>

            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Follow Us</h3>

            <div className="flex gap-5 text-gray-700 text-lg">
              <FaFacebookF className="cursor-pointer hover:text-blue-600 transition" />
              <FaTwitter className="cursor-pointer hover:text-blue-600 transition" />
              <FaInstagram className="cursor-pointer hover:text-blue-600 transition" />
              <FaLinkedinIn className="cursor-pointer hover:text-blue-600 transition" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-10"></div>

        {/* Bottom */}
        <div className="text-center text-gray-500 text-sm">
          © 2026 Blog Central. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;