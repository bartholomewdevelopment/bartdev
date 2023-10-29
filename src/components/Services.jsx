import React from 'react'
import {CgWebsite} from "react-icons/cg"
import {DiAppstore} from "react-icons/di"
import {BiSolidBug} from "react-icons/bi"
import { SectionTitle } from '../pages/shared/SectionTitle'

export const Services = () => {
  return (
    <div className='md:w-[90%] xl:w-[1200px] mx-auto overflow-hidden'>
        {/* section title */}
        <SectionTitle
        badge="SERVICES" 
        title="Expert Solutions Tailored for Your Needs" 
        description="Why settle for off-the-shelf solutions when you can get customized services that fit your unique requirements? From web development to app creation, we've got you covered."
        />
        {/* services */}
        <div className='px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
            {/* sevice */}
            <div data-aos="fade-right" data-aos-duration="1000" className='p-5 shadow-sm h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center'>
                {/* icon */}
                <div className='bg-primary w-[80px] h-[80px] rounded-full flex justify-center items-center'>
                    <CgWebsite className='text-white text-4xl'/>
                </div>
                {/* details */}
                <h2 className='text-2xl font-bold mt-5'>Web Development</h2>
                <p className='text-center text-gray py-3'>Overtime Athletic Management is our first software release.  We are also proud to announce that Farm and Ranch Management is currently in development and will be released for Beta testing in 2025.</p>
            </div>
            {/* sevice */}
            <div data-aos="flip-up" data-aos-duration="1000" className='p-5 shadow-sm h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center'>
                {/* icon */}
                <div className='bg-primary w-[80px] h-[80px] rounded-full flex justify-center items-center'>
                    <DiAppstore className='text-white text-4xl'/>
                </div>
                {/* details */}
                <h2 className='text-2xl font-bold mt-5'>App Development</h2>
                <p className='text-center text-gray py-3'>Mobile-first is more than just a buzzword—it's a necessity. We bring your vision to life with robust, user-friendly mobile applications that captivate your audience.
</p>
            </div>
            {/* sevice */}
            <div data-aos="fade-left" data-aos-duration="1000" className='p-5 shadow-sm h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center'>
                {/* icon */}
                <div className='bg-primary w-[80px] h-[80px] rounded-full flex justify-center items-center'>
                    <BiSolidBug className='text-white text-4xl'/>
                </div>
                {/* details */}
                <h2 className='text-2xl font-bold mt-5'>Fix Website</h2>
                <p className='text-center text-gray py-3'>Is your website not performing to its full potential? We offer comprehensive troubleshooting and optimization services to elevate your online experience.
</p>
            </div>
        </div>
    </div>
  )
}
