import React from 'react'
import { SectionTitle } from '../pages/shared/SectionTitle'
import img1 from "../assets/portfolio/farms.png"
import img2 from "../assets/portfolio/overtime.png"

export const Portfolio = () => {
  return (
    <div className='w-[95%] md:w-[90%] xl:w-[1200px] mx-auto overflow-hidden'>
        {/* section title */}
        <SectionTitle
        badge="PORFOLIO"
        title="Web Design & Development Portfolio"
        description="Explore a selection of our web design and development projects, showcasing creativity, innovation, and functionality. From eye-catching designs to seamless user experiences, our portfolio demonstrates our commitment to crafting digital solutions that make an impact."
        />
        {/* projects */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* project */}
            <div data-aos="fade-right" data-aos-duration="1000" className='min-h-[380px] bg-white rounded-lg p-4'>
                <img className='shadow-md border border-gray/40 rounded-lg w-full h-[250px]' src={img2} alt="" />
                <div className='py-4'>
                    <h2 className='text-xl font-semibold mb-5'>Simplifying athletic management with real-time scheduling, stats, and more.</h2>
                    <a target='_blanck' href='http://overtimeam.com' className='py-2  bg-primary text-white border-primary border hover:text-primary hover:bg-white rounded-sm px-6 shadow-lg text-[16px]'>Visit Website</a>
                </div>
            </div>
            {/* project */}
            <div data-aos="fade-left" data-aos-duration="1000" className='min-h-[380px] bg-white rounded-lg p-4'>
                <img className='shadow-md border border-gray/40 rounded-lg w-full h-[250px]' src={img1} alt="" />
                <div className='py-4'>
                    <h2 className='text-xl font-semibold mb-5'>Revolutionizing agricultural operations with data-driven insights.</h2>
                    <a target='_blanck' href='http://farmssystems.com' className='py-2  bg-primary text-white border-primary border hover:text-primary hover:bg-white rounded-sm px-6 shadow-lg text-[16px]'>Visit Website</a>
                </div>
            </div>
        </div>
    </div>
  )
}
