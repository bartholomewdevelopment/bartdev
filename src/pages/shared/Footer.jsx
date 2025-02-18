import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-white shadow-xl py-6">
      <div className="w-[95%] md:w-[90%] xl:w-[1200px] mx-auto flex flex-col items-center text-center md:text-left md:flex-row justify-between">
        
        {/* Social Icons - Centered on Mobile, Left on Desktop */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a 
            className="w-[45px] h-[45px] bg-[#FE6A61] rounded-full flex justify-center items-center hover:opacity-80 transition-all duration-300" 
            target="_blank" 
            rel="noopener noreferrer"
            href="https://www.facebook.com/people/Bartholomew-Development/61551365503922/"
          >
            <FaFacebookF className="text-white text-2xl"/>
          </a>
          <a 
            className="w-[45px] h-[45px] bg-[#FE6A61] rounded-full flex justify-center items-center hover:opacity-80 transition-all duration-300" 
            target="_blank" 
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/bartholomew-development/about/"
          >
            <BiLogoLinkedin className="text-white text-2xl"/>
          </a>
        </div>

        {/* Contact Info - Centered on Mobile, Right on Desktop */}
        <div className="flex flex-col items-center md:items-start text-black text-lg space-y-2">
          <p className="flex items-center font-nexa-bold">
            <BsFillTelephoneFill className="mr-2 text-[#FE6A61]" /> 
            <span>740-688-8251</span>
          </p>
          <p className="flex items-center font-nexa-bold break-words">
            <MdEmail className="mr-2 text-[#FE6A61]" /> 
            <a href="mailto:joseph@bartholomewdevelopment.com" className="hover:text-[#FE6A61] transition-all duration-300">
              joseph@bartholomewdevelopment.com
            </a>
          </p>
        </div>
      </div>

      {/* Mini Footer */}
      <div className="py-3 text-center text-black font-nexa-bold text-sm mt-4">
        <p className="px-2">
          © 2025 BARTHOLOMEW DEVELOPMENT. All Rights Reserved. Designed & Developed By Bartholomew Development LLC
        </p>
      </div>
    </div>
  );
};

export default Footer;
