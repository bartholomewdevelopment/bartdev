import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { BiLogoLinkedin } from "react-icons/bi"
import { BsFillTelephoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"

export const Footer = () => {
  return (
    <div className="bg-white shadow-xl">
        <div className='h-[90px] w-[95%] md:w-[90%] xl:w-[1200px] mx-auto flex justify-between items-center'>
            {/* Social Icons */}
            <div className='flex'>
                <a 
                    className='w-[45px] h-[45px] bg-[#FE6A61] rounded-full flex justify-center items-center mx-3 hover:opacity-80 transition-all duration-300' 
                    target='_blank' 
                    href="https://www.facebook.com/people/Bartholomew-Development/61551365503922/"
                >
                    <FaFacebookF className='text-white text-2xl'/>
                </a>
                <a 
                    className='w-[45px] h-[45px] bg-[#FE6A61] rounded-full flex justify-center items-center mx-3 hover:opacity-80 transition-all duration-300' 
                    target='_blank' 
                    href="https://www.linkedin.com/company/bartholomew-development/about/"
                >
                    <BiLogoLinkedin className='text-white text-2xl'/>
                </a>
            </div>

            {/* Contact Info */}
            <div className='flex flex-col text-black text-lg'>
                <p className='flex items-center font-nexa-bold'>
                    <BsFillTelephoneFill className='mr-2 text-[#FE6A61]'/> 
                    <span>740-688-8251</span>
                </p>
                <p className='flex items-center font-nexa-bold'>
                    <MdEmail className='mr-2 text-[#FE6A61]'/> 
                    <a href='mailto:joseph@bartholomewdevelopment.com' className="hover:text-[#FE6A61] transition-all duration-300">
                        joseph@bartholomewdevelopment.com
                    </a>
                </p>
            </div>
        </div>

        {/* Mini Footer */}
        <div className='py-3 text-center text-black font-nexa-bold text-sm'>
            <p className='px-2'>© 2025 BARTHOLOMEW DEVELOPMENT. All Rights Reserved. Designed & Developed By Bartholomew Development LLC</p>
        </div>
    </div>
  )
}
