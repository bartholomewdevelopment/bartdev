import React from 'react'
import {FaFacebookF} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
import {BiLogoLinkedin} from "react-icons/bi"
import {BsFillTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"

export const Footer = () => {
  return (
    <div data-aos="fade-up" >
        <div className='min-h-[200px] bg-madBlack text-white flex justify-between items-center py-5 mt-6'>
            <div className='w-[90%] xl:w-[1200px] mx-auto flex flex-col justify-center items-center'>
                {/* social icons */}
                <div className='flex'>
                    <a className='w-[45px] h-[45px] bg-white rounded-full flex justify-center items-center mx-3' href="">
                        <FaFacebookF className='text-primary text-2xl'/>
                    </a>
                    <a className='w-[45px] h-[45px] bg-white rounded-full flex justify-center items-center mx-3' href="">
                        <AiOutlineTwitter className='text-primary text-2xl'/>
                    </a>
                    <a className='w-[45px] h-[45px] bg-white rounded-full flex justify-center items-center mx-3' href="">
                        <BiLogoLinkedin className='text-primary text-2xl'/>
                    </a>
                </div>
                {/* location */}
                <div className='my-5 flex flex-col items-center pt-3'>
                    <p className='flex items-center'><BsFillTelephoneFill className='mr-2 text-primary'/> <span>+880 8080 8080</span></p>
                    <p className='flex items-center'><MdEmail className='mr-2 text-primary'/> <span>joseph@bartholomewdevelopment.com</span></p>
                </div>
            </div>
        </div>
        {/* mini footer */}
        <div className='py-3 text-center'>
            <p>© 2023 BARTHOLOMEW All Rights Reserved. Desinged & Developed By BARTHOLOMEW</p>
        </div>
    </div>
  )
}
