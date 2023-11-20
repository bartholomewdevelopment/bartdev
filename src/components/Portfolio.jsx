import React from 'react'
import { SectionTitle } from '../pages/shared/SectionTitle'
import img1 from "../assets/portfolio/farms.png"
import img2 from "../assets/portfolio/overtime.png"

export const Portfolio = () => {
  return (
    <div className='w-[95%] md:w-[90%] xl:w-[1200px] mx-auto overflow-hidden'>
        {/* section title */}
        <SectionTitle
        badge="PORTFOLIO"
        title="Cutting-Edge Digital Innovations: Overtime Athletic Management & FARMS"
        description="Explore Overtime AM and FARMS, our key software developments. Overtime AM streamlines athletic management with a focus on efficiency and ease of use. FARMS offers advanced tools for agricultural management, integrating technology and practical insights. Both projects showcase our commitment to smart, user-friendly web solutions."
        />
        {/* projects */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* project */}
            <div data-aos="fade-right" data-aos-duration="1000" className='min-h-[380px] bg-white rounded-lg p-4'>
                <img className='shadow-md border border-gray/40 rounded-lg w-full h-[250px]' src={img2} alt="" />
                <div className='py-4'>
                    <h2 className='text-xl font-semibold mb-5'>Simplifying your athletic department with real-time registration, scheduling, stats, and more.</h2>
                    <a target='_blank' href='http://overtimeam.com' className='py-2  bg-primary text-white border-primary border hover:text-primary hover:bg-white rounded-sm px-6 shadow-lg text-[16px]'>Visit Website</a>
                </div>
            </div>
            {/* project */}
            <div data-aos="fade-left" data-aos-duration="1000" className='min-h-[380px] bg-white rounded-lg p-4'>
                <img className='shadow-md border border-gray/40 rounded-lg w-full h-[250px]' src={img1} alt="" />
                <div className='py-4'>
                    <h2 className='text-xl font-semibold mb-5'>Revealing the hidden value of agricultural ventures, from small family farms to large corporate operations. Harness data-driven insights to maximize efficiency and profitability across all scales of agriculture.</h2>
                    <a target='_blank' href='http://farmssystems.com' className='py-2  bg-primary text-white border-primary border hover:text-primary hover:bg-white rounded-sm px-6 shadow-lg text-[16px]'>Visit Website</a>
                </div>
            </div>
        </div>
    </div>
  )
}
