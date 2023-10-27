import React from 'react'
import {FaFacebookF} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
import {BiLogoLinkedin} from "react-icons/bi"

export const Footer = () => {
  return (
    <div className='h-[200px] bg-madBlack text-white flex justify-between items-center'>
        <div className='w-[90%] xl:w-[1200px] mx-auto flex flex-col justify-center items-center'>
            {/* social icons */}
            <div className='flex'>
                <a className='w-[55px] h-[55px] bg-white rounded-full flex justify-center items-center mx-3' href="">
                    <FaFacebookF className='text-primary text-3xl'/>
                </a>
                <a className='w-[55px] h-[55px] bg-white rounded-full flex justify-center items-center mx-3' href="">
                    <AiOutlineTwitter className='text-primary text-3xl'/>
                </a>
                <a className='w-[55px] h-[55px] bg-white rounded-full flex justify-center items-center mx-3' href="">
                    <BiLogoLinkedin className='text-primary text-3xl'/>
                </a>
            </div>
            {/* location */}
            <div>
                <p>amn tamn</p>
            </div>
        </div>
    </div>
  )
}
