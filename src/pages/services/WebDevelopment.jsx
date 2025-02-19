import React, { useState } from 'react';
import ServiceCard from "../../components/ServiceCard";
import OrderServicesModal from "../../components/OrderServicesModal";

function WebDevelopment() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-6 py-12 text-gray-800 font-nexa">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#FE6A61]">Web Development Services</h1>
      <p className="text-lg text-center mb-12">
        We build high-quality websites tailored to your business needs.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <ServiceCard title="Custom Websites" description="We create stunning, responsive websites tailored to your brand." />
        <ServiceCard title="E-Commerce Solutions" description="Build an online store with smooth payment and shopping experiences." />
        <ServiceCard title="SEO & Performance" description="Optimize your website for better search rankings and faster speeds." />
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#FE6A61] mb-4 text-center">Our Packages</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-bold text-[#FE6A61] mb-3">Simple Website</h3>
            <p className="text-gray-700 mb-3">
              <strong>Price Range:</strong> $500 - $1,500
            </p>
            <p className="text-gray-700">
              Ideal for <strong>small businesses, personal brands, and freelancers</strong>. These websites are perfect for establishing your online presence with essential features like contact forms, basic SEO, and responsive design.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-bold text-[#FE6A61] mb-3">Larger Website</h3>
            <p className="text-gray-700 mb-3">
              <strong>Price Range:</strong> $2,000 - $5,000
            </p>
            <p className="text-gray-700">
              Suited for <strong>medium-sized businesses and eCommerce startups</strong>. Includes advanced features like custom integrations, content management systems, and more sophisticated design and functionality.
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

export default WebDevelopment;