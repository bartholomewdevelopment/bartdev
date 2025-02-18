import React from "react";
import banner from "../assets/banner.jpg"; // Ensure correct path to the image
import dashboardImg from "../assets/overtime-dashboard.png"; // Dashboard image

const Banner = () => {
  return (
    <div 
      className="relative min-h-[75vh] flex items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FE6A61] to-[#FE6A6190] opacity-90"></div>

      <div className="relative z-10 md:w-[90%] xl:w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Content */}
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className="w-[90%] md:w-[50%] mx-auto text-white my-10 md:m-0"
        >
          <h4 className="text-2xl md:text-3xl font-nexa-bold mb-2">Software Development</h4>
          <h1 className="text-[36px] md:text-[54px] font-nexa-bold">
            Bartholomew Development presents Overtime Athletic Management
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Say Goodbye to Fragmented Athletic Management. Try our beta and experience a unified
            platform that streamlines registration, scheduling, and more. Designed for Athletic
            Directors, by those who understand the game.
          </p>

          {/* Updated Button to Directly Link to Sign Up */}
          <a
            href="https://overtimeam.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="py-3 mt-6 bg-white text-[#FE6A61] rounded-lg px-6 shadow-lg text-[20px] hover:bg-gray-100 transition-all">
              Sign Up
            </button>
          </a>
        </div>

        {/* Right Side - Overtime Dashboard Image & Description */}
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="md:w-[50%] flex flex-col justify-center items-center text-center my-10 md:m-0"
        >
          <img 
            src={dashboardImg} 
            alt="Overtime Dashboard" 
            className="w-[80%] md:w-[90%] xl:w-[100%] max-w-[600px] rounded-lg shadow-lg border border-gray-200"
          />
          <p className="mt-4 text-white text-lg md:text-xl leading-relaxed">
            Overtime AM simplifies team and league management, making scheduling, communication, and finances effortless. 
            Empower your athletes and staff with a modern, streamlined experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
