import React from 'react'
import {CgWebsite} from "react-icons/cg"
import {DiAppstore} from "react-icons/di"
import {BiSolidBug} from "react-icons/bi"

export const Services = () => {
  return (
    <div className='md:w-[90%] xl:w-[1200px] mx-auto overflow-hidden'>
        {/* section title */}
        <div className='my-14 text-center'>
            <h4 className='text-primary text-xl font-semibold'>SERVICES</h4>
            <h1 className='text-[40px] font-bold'>Get Services from us</h1>
            <p className='text-gray w-[80%] md:w-[60%] text-lg mx-auto'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader.</p>
        </div>
        {/* services */}
        <div className='px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
            {/* sevice */}
            <div data-aos="fade-right" data-aos-duration="1000" className='p-5 shadow-sm h-[250px] bg-white rounded-2xl flex flex-col items-center justify-center'>
                {/* icon */}
                <div className='bg-primary w-[80px] h-[80px] rounded-full flex justify-center items-center'>
                    <CgWebsite className='text-white text-4xl'/>
                </div>
                {/* details */}
                <h2 className='text-2xl font-bold mt-5'>Web Development</h2>
                <p className='text-center text-gray'>It is a long fact that a reader will be distracted by the content of a page .</p>
            </div>
            {/* sevice */}
            <div data-aos="flip-up" data-aos-duration="1000" className='p-5 shadow-sm h-[250px] bg-white rounded-2xl flex flex-col items-center justify-center'>
                {/* icon */}
                <div className='bg-primary w-[80px] h-[80px] rounded-full flex justify-center items-center'>
                    <DiAppstore className='text-white text-4xl'/>
                </div>
                {/* details */}
                <h2 className='text-2xl font-bold mt-5'>App Development</h2>
                <p className='text-center text-gray'>It is a long fact that a reader will be distracted by the content of a page .</p>
            </div>
            {/* sevice */}
            <div data-aos="fade-left" data-aos-duration="1000" className='p-5 shadow-sm h-[250px] bg-white rounded-2xl flex flex-col items-center justify-center'>
                {/* icon */}
                <div className='bg-primary w-[80px] h-[80px] rounded-full flex justify-center items-center'>
                    <BiSolidBug className='text-white text-4xl'/>
                </div>
                {/* details */}
                <h2 className='text-2xl font-bold mt-5'>Fix Website</h2>
                <p className='text-center text-gray'>It is a long fact that a reader will be distracted by the content of a page .</p>
            </div>
        </div>
    </div>
  )
}
