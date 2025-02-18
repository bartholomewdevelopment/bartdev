import React, { useState } from "react";
import { SectionTitle } from "../../pages/shared/SectionTitle";
import OrderServicesModal from "../../components/OrderServicesModal";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-[95%] md:w-[90%] xl:w-[1200px] mx-auto py-12">
      <SectionTitle
        badge="CONTACT US"
        title="Let's Build Something Amazing Together"
        description="Bartholomew Development LLC specializes in software and web development, 
        helping entrepreneurs and businesses turn ideas into fully functional digital solutions. 
        Whether you're looking for a new website, an MVP for your startup, or ongoing software support, 
        we're here to guide you every step of the way."
      />

      {/* Additional Information */}
      <p className="text-lg text-gray-700 text-center mx-auto md:w-[75%] leading-relaxed mt-6">
        We understand that technology can be overwhelming, especially for startups and growing businesses.
        Our approach is simple: we listen, strategize, and execute—ensuring that your project is not just 
        another piece of software, but a true business asset. Whether you're ready to start immediately 
        or just exploring options, let's talk!
      </p>

      {/* Contact Options */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {/* Schedule Meeting */}
        <a
          href="https://app.usemotion.com/meet/joseph-bartholomew-wq0p/bartdev-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FE6A61] text-white py-4 px-6 rounded-lg text-lg font-bold hover:bg-[#d85b52] transition-all text-center flex items-center justify-center"
        >
          Schedule a Meeting
        </a>

        {/* Order Services */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#FE6A61] text-white py-4 px-6 rounded-lg text-lg font-bold hover:bg-[#d85b52] transition-all w-full"
        >
          Order Services
        </button>
      </div>

      {/* Render Order Services Modal */}
      <OrderServicesModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Contact;
