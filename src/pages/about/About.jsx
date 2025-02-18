import React from "react";
import { SectionTitle } from "../../pages/shared/SectionTitle";
import placeholderImage from "../../assets/about-placeholder.jpg"; // Replace with your actual image

const About = () => {
  return (
    <div className="w-[95%] md:w-[90%] xl:w-[1200px] mx-auto py-12">
      {/* Section Title */}
      <SectionTitle
        badge="ABOUT US"
        title="The Story Behind Bartholomew Development"
        description="Building innovative solutions that empower businesses, entrepreneurs, and the next generation of software developers."
      />

      {/* About Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div data-aos="fade-right" data-aos-duration="1000">
          <img
            src={placeholderImage}
            alt="Founder - Joey Bartholomew"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Text Section */}
        <div data-aos="fade-left" data-aos-duration="1000">
          <h2 className="text-3xl md:text-4xl font-nexa-bold text-[#FE6A61] mb-4">
            Meet Joey Bartholomew
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Bartholomew Development LLC was founded by Joey Bartholomew, an entrepreneur, software developer, and business strategist passionate about helping businesses grow through technology. With expertise in custom software development, automation, and business solutions, Joey has built a reputation for delivering high-quality, scalable solutions that drive real-world impact.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
            But beyond just writing code, Joey's mission is to empower both businesses and developers. He believes that technology should make life easier, not harder, and that entrepreneurs shouldn’t have to struggle through technical roadblocks alone. That belief is what led to the creation of BartDev Startup Lab, a dedicated space for guiding startups through lean strategy, MVP development, and technical mentorship.
          </p>
        </div>
      </div>

      {/* The Bartholomew Development & Overtime Journey */}
      <div className="mt-12">
        <h2 className="text-3xl md:text-4xl font-nexa-bold text-[#FE6A61] text-center">
          The Bartholomew Development & Overtime Journey
        </h2>
        <p className="text-lg md:text-xl text-gray-700 text-center mt-4">
          Innovation, mentorship, and business success drive everything we do.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          {/* Overtime AM */}
          <div data-aos="fade-up" data-aos-duration="1000" className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-nexa-bold text-[#FE6A61] mb-3">Overtime Athletic Management</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Overtime AM was built to help athletic directors and coaches streamline team registration, scheduling, communication, and financial management. Designed by someone who understands the challenges of sports administration, Overtime AM is the ultimate tool for making athletic management easier.
            </p>
          </div>

          {/* Bartholomew Development LLC */}
          <div data-aos="fade-up" data-aos-duration="1000" className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-nexa-bold text-[#FE6A61] mb-3">Bartholomew Development LLC</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Custom software, automation, and strategic business solutions—Bartholomew Development LLC is about creating powerful, scalable, and user-friendly digital products. Whether it’s a startup MVP, a complex web platform, or a business automation tool, our goal is to deliver results that matter.
            </p>
          </div>
        </div>
      </div>

      {/* Philosophy on Mentorship & Junior Developers */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl md:text-4xl font-nexa-bold text-[#FE6A61]">
          Investing in the Future: Our Mentorship Philosophy
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Every developer deserves a chance to grow.  
          We create real-world opportunities for junior developers to gain hands-on experience and professional mentorship in software development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div data-aos="fade-up" data-aos-duration="1000" className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-nexa-bold text-[#FE6A61] mb-3">Real-World Experience</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We hire and train junior developers, giving them real projects with real clients to work on.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000" className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-nexa-bold text-[#FE6A61] mb-3">Career Growth</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every junior developer gets mentorship, code reviews, and professional development to build a strong career.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000" className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-nexa-bold text-[#FE6A61] mb-3">Glowing Recommendations</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              When they’re ready to move up, we help them land senior roles—either within BartDev or beyond.
            </p>
          </div>
        </div>
      </div>

      {/* BartDev Startup Lab */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl md:text-4xl font-nexa-bold text-[#FE6A61]">
          Introducing BartDev Startup Lab
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          A structured program for entrepreneurs looking to launch and grow their startup ideas with confidence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div data-aos="fade-up" data-aos-duration="1000" className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-nexa-bold text-[#FE6A61] mb-3">Lean Startup Strategy</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Customer discovery, problem validation, and early-stage business model refinement** to ensure market fit before development.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000" className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-nexa-bold text-[#FE6A61] mb-3">MVP Development & Launch</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We help startups build prototype designs, develop an MVP, and test their product with early users.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl md:text-4xl font-nexa-bold text-[#FE6A61]">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Let's talk about how Bartholomew Development can help your business grow.
        </p>
        <div className="mt-6">
          <a href="/contact" className="py-3 px-6 bg-[#FE6A61] text-white rounded-lg text-lg font-bold hover:bg-[#d85b52] transition-all">
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
