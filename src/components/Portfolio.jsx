import React from 'react'
import { SectionTitle } from '../pages/shared/SectionTitle'
import img1 from "../assets/portfolio/farms.png"
import img2 from "../assets/portfolio/overtime.png"

export const Portfolio = () => {
  return (
    <div className='w-[95%] md:w-[90%] xl:w-[1200px] mx-auto overflow-hidden'>
        {/* Section Title */}
        <SectionTitle
          badge="PORTFOLIO"
          title="Cutting-Edge Digital Innovations: Overtime Athletic Management & FARMS"
          description={
            <p className='text-lg md:text-xl leading-relaxed text-gray-700'>
              Explore Overtime AM and FARMS, our key software developments. Overtime AM streamlines athletic 
              management with a focus on efficiency and ease of use. FARMS offers advanced tools for agricultural 
              management, integrating technology and practical insights. Both projects showcase our commitment 
              to smart, user-friendly web solutions.
            </p>
          }
        />
        
        {/* Projects */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* Overtime AM */}
            <div data-aos="fade-right" data-aos-duration="1000" className='min-h-[450px] bg-white rounded-lg p-6 flex flex-col justify-between'>
                <img className='shadow-md border border-gray/40 rounded-lg w-full h-[250px]' src={img2} alt="Overtime AM" />
                <div className='py-4 flex flex-col flex-grow'>
                    <h2 className='text-xl font-nexa-bold text-[#FE6A61] mb-3'>Overtime Athletic Management</h2>
                    <p className='text-lg md:text-xl leading-relaxed text-gray-700 flex-grow'>
                        Empowering athletic programs of all sizes, from school teams to competitive leagues. 
                        Streamline team management with cutting-edge tools for scheduling, communication, and finance, 
                        optimizing performance on and off the field.
                    </p>
                    <div className="mt-6">
                        <a target='_blank' href='http://overtimeam.com' 
                          className='py-2 bg-[#FE6A61] text-white border-[#FE6A61] border hover:text-[#FE6A61] hover:bg-white rounded-sm px-6 shadow-lg text-[16px]'>
                            Visit Website
                        </a>
                    </div>
                </div>
            </div>

            {/* FARMS */}
            <div data-aos="fade-left" data-aos-duration="1000" className='min-h-[450px] bg-white rounded-lg p-6 flex flex-col justify-between'>
                <img className='shadow-md border border-gray/40 rounded-lg w-full h-[250px]' src={img1} alt="FARMS Systems" />
                <div className='py-4 flex flex-col flex-grow'>
                    <h2 className='text-xl font-nexa-bold text-[#FE6A61] mb-3'>FARMS: Farm & Ranch Management System</h2>
                    <p className='text-lg md:text-xl leading-relaxed text-gray-700 flex-grow'>
                        Revealing the hidden value of agricultural ventures, from small family farms to large corporate operations. 
                        Harness data-driven insights to maximize efficiency and profitability across all scales of agriculture.
                    </p>
                    <div className="mt-6">
                        <a target='_blank' href='http://farmssystems.com' 
                          className='py-2 bg-[#FE6A61] text-white border-[#FE6A61] border hover:text-[#FE6A61] hover:bg-white rounded-sm px-6 shadow-lg text-[16px]'>
                            Visit Website
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
