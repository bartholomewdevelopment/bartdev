import React, { useState } from 'react';
import ServiceCard from "../../components/ServiceCard";
import OrderServicesModal from "../../components/OrderServicesModal";

function SoftwareDevelopment() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-6 py-12 text-gray-800 font-nexa">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#FE6A61]">Software Development</h1>
      <p className="text-lg text-center mb-12">
        Custom software solutions designed for efficiency and scalability.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <ServiceCard title="Enterprise Software" description="We develop high-performance software for large-scale businesses." />
        <ServiceCard title="Custom CRM Development" description="Streamline your business operations with a tailored CRM." />
        <ServiceCard title="Automated Business Solutions" description="Improve productivity with AI-driven automation tools." />
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#FE6A61] mb-4 text-center">Our Packages</h2>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-bold text-[#FE6A61] mb-3">Small Project</h3>
            <p className="text-gray-700 mb-3">
              <strong>Price Range:</strong> $5,000 - $10,000
            </p>
            <p className="text-gray-700">
              Ideal for <strong>entrepreneurs and small businesses</strong>. Perfect for simple utility apps or plugins to streamline operations with basic functionality.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-bold text-[#FE6A61] mb-3">Medium Project</h3>
            <p className="text-gray-700 mb-3">
              <strong>Price Range:</strong> $10,000 - $15,000
            </p>
            <p className="text-gray-700">
              Suited for <strong>startups and growing businesses</strong>. Offers standalone apps with moderate complexity and scalability for expanding needs.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-bold text-[#FE6A61] mb-3">Large Project</h3>
            <p className="text-gray-700 mb-3">
              <strong>Price Range:</strong> $15,000 - $50,000
            </p>
            <p className="text-gray-700">
              Designed for <strong>established businesses with complex needs</strong>. Includes integrations, high user capacity, and advanced features.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-bold text-[#FE6A61] mb-3">Enterprise Project</h3>
            <p className="text-gray-700 mb-3">
              <strong>Price Range:</strong> $50,000+
            </p>
            <p className="text-gray-700">
              Tailored for <strong>large-scale businesses and mission-critical systems</strong>. Features scalable, high-performance solutions with extensive customization.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold text-[#FE6A61] mb-4">Pricing Considerations</h2>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          The prices listed are approximate and can vary based on project complexity, custom features, and your specific requirements. Final pricing will be determined after a detailed discussion of your project scope. We aim to provide value, not just a service.
        </p>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#FE6A61] text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-[#d85b52] transition-all hover:shadow-xl transform hover:scale-105"
        >
          Get Your Custom Quote
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

export default SoftwareDevelopment;