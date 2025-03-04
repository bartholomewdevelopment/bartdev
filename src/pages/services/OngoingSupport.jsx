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
        <h2 className="text-3xl font-bold text-[#FE6A61] mb-4 text-center">Our Support Plans</h2>
        
        {/* Website Support */}
        <h3 className="text-2xl font-semibold text-center mb-4">Website Support</h3>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 mb-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md w-full">
            <h4 className="text-xl font-bold text-[#FE6A61] mb-3">Small Website</h4>
            <p className="text-gray-700 mb-2"><strong>Basic:</strong> $20/month - Hosting, security updates, email support</p>
            <p className="text-gray-700 mb-2"><strong>Standard:</strong> $50/month - Adds backups, 1 hr/month edits, priority email</p>
            <p className="text-gray-700"><strong>Premium:</strong> $100/month - Adds optimization, analytics, 2 hrs/month edits, phone</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md w-full">
            <h4 className="text-xl font-bold text-[#FE6A61] mb-3">Medium Website</h4>
            <p className="text-gray-700 mb-2"><strong>Basic:</strong> $75/month - Hosting, security, plugin updates, email support</p>
            <p className="text-gray-700 mb-2"><strong>Standard:</strong> $150/month - Adds backups, 2 hrs/month edits, e-commerce, priority email</p>
            <p className="text-gray-700"><strong>Premium:</strong> $250/month - Adds SEO, uptime monitoring, 4 hrs/month edits, phone</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md w-full">
            <h4 className="text-xl font-bold text-[#FE6A61] mb-3">Large Website</h4>
            <p className="text-gray-700 mb-2"><strong>Basic:</strong> $200/month - Hosting, security, basic updates, email support</p>
            <p className="text-gray-700 mb-2"><strong>Standard:</strong> $400/month - Adds backups, 4 hrs/month edits, tuning, priority email</p>
            <p className="text-gray-700"><strong>Premium:</strong> $750/month - Adds analytics, 8 hrs/month edits, account manager, 24/7</p>
          </div>
        </div>

        {/* Software Support */}
        <h3 className="text-2xl font-semibold text-center mb-4">Software Support</h3>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md w-full">
            <h4 className="text-xl font-bold text-[#FE6A61] mb-3">Small Software</h4>
            <p className="text-gray-700 mb-2"><strong>Basic:</strong> $10/month - Bug fixes, email support</p>
            <p className="text-gray-700 mb-2"><strong>Standard:</strong> $25/month - Adds minor updates, priority email</p>
            <p className="text-gray-700"><strong>Premium:</strong> $50/month - Adds 1 hr/month tweaks, phone</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md w-full">
            <h4 className="text-xl font-bold text-[#FE6A61] mb-3">Medium Software</h4>
            <p className="text-gray-700 mb-2"><strong>Basic:</strong> $50/month - Bug fixes, basic updates, email support</p>
            <p className="text-gray-700 mb-2"><strong>Standard:</strong> $100/month - Adds enhancements, 1 hr/month custom, priority email</p>
            <p className="text-gray-700"><strong>Premium:</strong> $200/month - Adds 2 hrs/month custom, optimization, phone</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md w-full">
            <h4 className="text-xl font-bold text-[#FE6A61] mb-3">Large Software</h4>
            <p className="text-gray-700 mb-2"><strong>Basic:</strong> $150/month - Bug fixes, security updates, email support</p>
            <p className="text-gray-700 mb-2"><strong>Standard:</strong> $300/month - Adds updates, 2 hrs/month custom, priority email</p>
            <p className="text-gray-700"><strong>Premium:</strong> $600/month - Adds 4 hrs/month custom, dedicated line, monitoring</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md w-full">
            <h4 className="text-xl font-bold text-[#FE6A61] mb-3">Enterprise Software</h4>
            <p className="text-gray-700 mb-2"><strong>Basic:</strong> $1,000/month - Bug fixes, security, email, 4 hrs/month</p>
            <p className="text-gray-700 mb-2"><strong>Standard:</strong> $2,500/month - Adds development, 10 hrs/month, phone, uptime</p>
            <p className="text-gray-700"><strong>Premium:</strong> $5,000+/month - Adds 20 hrs/month, 24/7, SLA, on-site</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold text-[#FE6A61] mb-4">Pricing Considerations</h2>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          The prices listed are approximate and can vary based on the scale of your needs, the complexity of your systems, and the level of service required. Pricing is customized after discussing your specific maintenance requirements.
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