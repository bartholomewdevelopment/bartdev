import React, { useState } from 'react';
import ServiceCard from "../../components/ServiceCard";
import OrderServicesModal from "../../components/OrderServicesModal";

function MVPDevelopment() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-6 py-12 text-gray-800 font-nexa">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#FE6A61]">MVP Development</h1>
      <p className="text-lg text-center mb-12">
        Bringing startup ideas to life with lean and scalable MVPs.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <ServiceCard title="Prototype Development" description="Rapidly create interactive prototypes to validate your idea." />
        <ServiceCard title="User Testing & Feedback" description="Gather valuable insights before launching your final product." />
        <ServiceCard title="Scalable MVP Architecture" description="Build a minimal viable product with future growth in mind." />
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#FE6A61] mb-4 text-center">Our MVP Package</h2>
        <div className="flex justify-center">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-bold text-[#FE6A61] mb-3">MVP Development</h3>
            <p className="text-gray-700 mb-3">
              <strong>Price Range:</strong> $5,000 - $15,000
            </p>
            <p className="text-gray-700">
              Designed for <strong>startups needing investor-ready prototypes</strong>. Our MVP service focuses on building a functional product to validate your business concept with core features to attract early users and investors.
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

export default MVPDevelopment;