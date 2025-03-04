import React from "react";
import { SectionTitle } from "../../pages/shared/SectionTitle";
import img1 from "../../assets/portfolio/farms.png";
import img2 from "../../assets/portfolio/overtime.png";
import img3 from "../../assets/portfolio/influenceonpurpose.png";
import img4 from "../../assets/portfolio/homecomingranch.png";

const Portfolio = () => {
  return (
    <div className="w-[95%] md:w-[90%] xl:w-[1200px] mx-auto overflow-hidden py-12">
      {/* Software Section */}
      <SectionTitle
        badge="SOFTWARE"
        title="Our Software Solutions"
        description="Explore some of the innovative software we've developed for our clients."
      />

      {/* Software Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Overtime AM */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="min-h-[450px] bg-white rounded-lg p-6 flex flex-col justify-between shadow-lg"
        >
          <img
            className="shadow-md border border-gray-200 rounded-lg w-full h-[250px] object-cover"
            src={img2}
            alt="Overtime AM"
          />
          <div className="py-4 flex flex-col flex-grow">
            <h2 className="text-xl font-nexa-bold text-[#FE6A61] mb-3">Overtime Athletic Management</h2>
            <p className="text-lg md:text-xl text-gray-700 flex-grow">
              A powerful platform designed to streamline team and league management. Manage scheduling, communication, and financials effortlessly.
            </p>
            <div className="mt-6">
              <a
                href="https://overtimeam.com"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 bg-[#FE6A61] text-white border border-[#FE6A61] hover:text-[#FE6A61] hover:bg-white rounded-sm px-6 shadow-lg text-[16px] transition-all"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>

        {/* FARMS */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="min-h-[450px] bg-white rounded-lg p-6 flex flex-col justify-between shadow-lg"
        >
          <img
            className="shadow-md border border-gray-200 rounded-lg w-full h-[250px] object-cover"
            src={img1}
            alt="FARMS Systems"
          />
          <div className="py-4 flex flex-col flex-grow">
            <h2 className="text-xl font-nexa-bold text-[#FE6A61] mb-3">FARMS: Farm & Ranch Management System</h2>
            <p className="text-lg md:text-xl text-gray-700 flex-grow">
              An advanced farm and ranch management tool that integrates automation, financial tracking, and resource management.
            </p>
            <div className="mt-6">
              <a
                href="https://farmssystems.com"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 bg-[#FE6A61] text-white border border-[#FE6A61] hover:text-[#FE6A61] hover:bg-white rounded-sm px-6 shadow-lg text-[16px] transition-all"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Websites Section */}
      <div className="mt-12">
        <SectionTitle
          badge="WEBSITES"
          title="Our Website Projects"
          description="Check out some of the stunning websites we've created for our clients."
        />

        {/* Websites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Influence on Purpose */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="min-h-[450px] bg-white rounded-lg p-6 flex flex-col justify-between shadow-lg"
          >

          <img
            className="shadow-md border border-gray-200 rounded-lg w-full h-[250px] object-cover"
            src={img3}
            alt="Influence on Purpose"
          />

            <div className="py-4 flex flex-col flex-grow">
              <h2 className="text-xl font-nexa-bold text-[#FE6A61] mb-3">Influence on Purpose</h2>
              <p className="text-lg md:text-xl text-gray-700 flex-grow">
                Helping leaders instill a regenerative culture within their organizations.
              </p>
              <div className="mt-6">
                <a
                  href="https://influenceonpurpose.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 bg-[#FE6A61] text-white border border-[#FE6A61] hover:text-[#FE6A61] hover:bg-white rounded-sm px-6 shadow-lg text-[16px] transition-all"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>

          {/* Homecoming Ranch */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="min-h-[450px] bg-white rounded-lg p-6 flex flex-col justify-between shadow-lg"
          >

          <img
            className="shadow-md border border-gray-200 rounded-lg w-full h-[250px] object-cover"
            src={img4}
            alt="Homecoming Ranch"
          />

            <div className="py-4 flex flex-col flex-grow">
              <h2 className="text-xl font-nexa-bold text-[#FE6A61] mb-3">Homecoming Ranch</h2>
              <p className="text-lg md:text-xl text-gray-700 flex-grow">
                A beautifully crafted website showcasing the charm and amenities of Homecoming Ranch.
              </p>
              <div className="mt-6">
                <a
                  href="https://homecomingranch.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 bg-[#FE6A61] text-white border border-[#FE6A61] hover:text-[#FE6A61] hover:bg-white rounded-sm px-6 shadow-lg text-[16px] transition-all"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;