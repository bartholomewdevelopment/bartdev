import React, { useState } from 'react';
import ServiceCard from "../../components/ServiceCard";
import OrderServicesModal from "../../components/OrderServicesModal";

function OngoingSupport() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-6 py-12 text-gray-800 font-nexa">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#FE6A61]">Ongoing Support & Maintenance</h1>
      <p className="text-lg text-center mb-12">
        Ensuring your software remains secure, updated, and efficient.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <ServiceCard title="Security Patches & Updates" description="Regular security enhancements to protect your business." />
        <ServiceCard title="Performance Monitoring" description="Track and optimize your system for peak performance." />
        <ServiceCard title="Feature Enhancements" description="Continuous improvements to adapt to your evolving needs." />
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#FE6A61] mb-4 text-center">Our Support Plan</h2>
        <div className="flex justify-center">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-bold text-[#FE6A61] mb-3">Ongoing Support and Maintenance</h3>
            <p className="text-gray-700 mb-3">
              <strong>Retainer Model:</strong> $500 - $5,000/month
            </p>
            <p className="text-gray-700">
              Our retainer model provides comprehensive support tailored to keep your systems running smoothly. This includes regular updates, performance tuning, and feature enhancements, ensuring you can focus on your business.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold text-[#FE6A61] mb-4">Pricing Considerations</h2>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          The price range for our ongoing support varies based on the scale of your needs, the complexity of your systems, and the level of service required. Pricing is customized after discussing your specific maintenance requirements.
        </p>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#FE6A61] text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-[#d85b52] transition-all hover:shadow-xl transform hover:scale-105"
        >
          Get Your Custom Support Plan
        </button>
      </section>

      {/* Order Services Modal */}
      <OrderServicesModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default OngoingSupport;