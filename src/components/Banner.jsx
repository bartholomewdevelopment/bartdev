import emailjs from "@emailjs/browser";
import React from "react";
import toast from "react-hot-toast";
import banner from "../assets/banner.jpg"; // Ensure correct path to the image

const Banner = () => {
  const handleSendMessage = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_3zbggaq", "template_kap1494", e.target, "0-W8xw21Q1_C79BP1")
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Successfully sent an email to Bartholomew Development LLC");
            e.target.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div 
      className="relative min-h-[70vh] flex items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FE6A61] to-[#FE6A6190] opacity-90"></div>

      <div className="relative z-10 md:w-[90%] xl:w-[1200px] mx-auto md:flex justify-between">
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

          <a href="mailto:joseph@bartholomewdevelopment.com">
            <button className="py-3 mt-6 bg-white text-[#FE6A61] rounded-lg px-6 shadow-lg text-[20px]">
              Get A Quote
            </button>
          </a>
        </div>

        {/* Right Form */}
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="md:w-[50%] flex justify-center my-10 md:m-0"
        >
          <div className="w-[90%] md:w-[60%] bg-white p-5 rounded-2xl">
            <h1 className="text-[36px] md:text-[28px] font-nexa-bold">Sign up for Discounted Beta Testing</h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Elevate your athletic department's performance and streamline operations with Overtime
              Athletic Management. Sign up for our beta test today and secure a special discounted
              rate!
            </p>
            <form onSubmit={handleSendMessage}>
              <input
                required
                name="name"
                className="w-full my-4 py-2 border border-gray/40 px-3"
                type="text"
                placeholder="Full Name"
              />
              <input
                required
                name="email"
                className="w-full my-4 py-2 border border-gray/40 px-3"
                type="email"
                placeholder="Email"
              />
              <input
                required
                name="phone"
                className="w-full my-4 py-2 border border-gray/40 px-3"
                type="number"
                placeholder="Phone"
              />
              <input
                required
                name="message"
                className="w-full my-4 py-2 border border-gray/40 px-3"
                type="text"
                placeholder="Comments or Questions?"
              />
              <button
                type="submit"
                className="py-2 bg-[#FE6A61] text-white border border-[#FE6A61] hover:text-[#FE6A61] hover:bg-white rounded-sm px-6 shadow-lg text-[16px]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
