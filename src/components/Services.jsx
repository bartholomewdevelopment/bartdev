import React from 'react';
import { CgWebsite } from "react-icons/cg";
import { DiAppstore } from "react-icons/di";
import { BiSolidBug } from "react-icons/bi";
import { FaRocket, FaUsers, FaTools } from "react-icons/fa";
import { SectionTitle } from '../pages/shared/SectionTitle';
import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <div className='md:w-[90%] xl:w-[1200px] mx-auto overflow-hidden'>
        {/* Section Title */}
        <SectionTitle
          badge="SERVICES" 
          title="Expert Solutions Tailored for Your Needs" 
          description={
            <p className='text-lg md:text-xl leading-relaxed text-gray-700'>
              Why settle for off-the-shelf solutions when you can get customized services that fit your unique 
              requirements? From web development to app creation, we've got you covered.
            </p>
          }
        />

        {/* Services Grid */}
        <div className='px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
          
          {/* Web Development */}
          <Link to="/services/web-development">
            <div data-aos="fade-right" data-aos-duration="1000" className='p-6 shadow-sm h-[350px] bg-white rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-all'>
              <div className='bg-[#FE6A61] w-[80px] h-[80px] rounded-full flex justify-center items-center'>
                <CgWebsite className='text-white text-4xl'/>
              </div>
              <h2 className='text-2xl font-nexa-bold text-[#FE6A61] mt-5'>Web Development</h2>
              <p className='text-center text-gray-700 text-lg md:text-xl leading-relaxed py-4'>
                Custom, responsive websites tailored to your brand.
              </p>
            </div>
          </Link>

          {/* Software Development */}
          <Link to="/services/software-development">
            <div data-aos="flip-up" data-aos-duration="1000" className='p-6 shadow-sm h-[350px] bg-white rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-all'>
              <div className='bg-[#FE6A61] w-[80px] h-[80px] rounded-full flex justify-center items-center'>
                <DiAppstore className='text-white text-4xl'/>
              </div>
              <h2 className='text-2xl font-nexa-bold text-[#FE6A61] mt-5'>Software Development</h2>
              <p className='text-center text-gray-700 text-lg md:text-xl leading-relaxed py-4'>
                Scalable software solutions for businesses of all sizes.
              </p>
            </div>
          </Link>

          {/* MVP Development */}
          <Link to="/services/mvp-development">
            <div data-aos="fade-left" data-aos-duration="1000" className='p-6 shadow-sm h-[350px] bg-white rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-all'>
              <div className='bg-[#FE6A61] w-[80px] h-[80px] rounded-full flex justify-center items-center'>
                <FaRocket className='text-white text-4xl'/>
              </div>
              <h2 className='text-2xl font-nexa-bold text-[#FE6A61] mt-5'>MVP Development</h2>
              <p className='text-center text-gray-700 text-lg md:text-xl leading-relaxed py-4'>
                Launch your startup idea with a lean, scalable MVP.
              </p>
            </div>
          </Link>

          {/* Ongoing Support */}
          <Link to="/services/ongoing-support">
            <div data-aos="fade-right" data-aos-duration="1000" className='p-6 shadow-sm h-[350px] bg-white rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-all'>
              <div className='bg-[#FE6A61] w-[80px] h-[80px] rounded-full flex justify-center items-center'>
                <FaTools className='text-white text-4xl'/>
              </div>
              <h2 className='text-2xl font-nexa-bold text-[#FE6A61] mt-5'>Ongoing Support</h2>
              <p className='text-center text-gray-700 text-lg md:text-xl leading-relaxed py-4'>
                Keep your website & software running smoothly with expert support.
              </p>
            </div>
          </Link>

          {/* Idea Sprint */}
          <Link to="/services/idea-sprint">
            <div data-aos="flip-up" data-aos-duration="1000" className='p-6 shadow-sm h-[350px] bg-white rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-all'>
              <div className='bg-[#FE6A61] w-[80px] h-[80px] rounded-full flex justify-center items-center'>
                <FaRocket className='text-white text-4xl'/>
              </div>
              <h2 className='text-2xl font-nexa-bold text-[#FE6A61] mt-5'>Idea Sprint</h2>
              <p className='text-center text-gray-700 text-lg md:text-xl leading-relaxed py-4'>
                Validate and refine your startup idea quickly and effectively.
              </p>
            </div>
          </Link>

          {/* BartDev Startup Lab */}
          <Link to="/services/bartdev-startup-lab">
            <div data-aos="fade-left" data-aos-duration="1000" className='p-6 shadow-sm h-[350px] bg-white rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-all'>
              <div className='bg-[#FE6A61] w-[80px] h-[80px] rounded-full flex justify-center items-center'>
                <FaUsers className='text-white text-4xl'/>
              </div>
              <h2 className='text-2xl font-nexa-bold text-[#FE6A61] mt-5'>BartDev Startup Lab</h2>
              <p className='text-center text-gray-700 text-lg md:text-xl leading-relaxed py-4'>
                Incubate and accelerate your startup with expert guidance.
              </p>
            </div>
          </Link>

        </div>

        {/* CTA Button to Pricing
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-[#FE6A61]">Need a Service?</h2>
          <p className="text-lg text-gray-600 mt-2">
            Explore our pricing plans and get started today!
          </p>
          <Link to="/pricing">
            <button className="mt-6 bg-[#FE6A61] text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-[#d85b52] transition-all">
              View Pricing & Order Services
            </button>
          </Link>
        </div> */}

    </div>
  );
};

export default Services;