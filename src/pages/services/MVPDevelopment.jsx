import React, { useState } from 'react';
import ServiceCard from "../../components/ServiceCard";
import OrderServicesModal from "../../components/OrderServicesModal";

function MVPDevelopment() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-6 py-12 text-gray-800 font-nexa">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#FE6A61]">MVP Development</h1>
      <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
        Transform your vision into a working product with our structured MVP development process. 
        We guide you from concept to launch with a lean, scalable solution designed to validate 
        your idea and attract early adopters.
      </p>

      {/* Process Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#FE6A61] mb-6 text-center">Our Proven Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            title="Discovery" 
            description="We define your needs and create a prioritized feature list ($1,000, 2-3 weeks)." 
          />
          <ServiceCard 
            title="Planning" 
            description="We design functionality and wireframes at no cost (Free, 2-4 weeks)." 
          />
          <ServiceCard 
            title="MVP Build" 
            description="We deliver a functional prototype for daily use ($5,000-$20,000, 4-8 weeks)." 
          />
          <ServiceCard 
            title="Growth Phases" 
            description="We enhance features in optional phases ($3,000-$5,000 each, 2-4 weeks per phase)." 
          />
        </div>
      </section>

      {/* MVP Details */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#FE6A61] mb-6 text-center">What You Get with Your MVP</h2>
        <div className="bg-gray-100 rounded-lg shadow-lg p-6 max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-[#FE6A61] mb-4">Core MVP Package</h3>
          <ul className="text-gray-700 mb-4 list-disc list-inside">
            <li>User authentication and basic interface</li>
            <li>Note entry system for daily use</li>
            <li>Basic CRM functionality</li>
            <li>Initial testing and deployment</li>
            <li>Setup and usage documentation</li>
          </ul>
          <p className="text-gray-700 font-bold">
            Starting at: $1,000 upfront + $5,000 - $20,000*
          </p>
          <p className="text-gray-700 font-bold mt-2">
            Optional Phases: $3,000 - $5,000/phase
          </p>
          <p className="text-gray-600 text-sm mt-2">
            *MVP cost set after Discovery ($1,000) & Planning (free). Phases optional.
          </p>
        </div>
      </section>

      {/* Pricing Breakdown */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#FE6A61] mb-6 text-center">Complete Pricing Breakdown</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#FE6A61] mb-3">Initial Phases</h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li><strong>Discovery:</strong> $1,000 (2-3 weeks)</li>
              <li><strong>Planning:</strong> Free (2-4 weeks)</li>
              <li><strong>MVP:</strong> $5,000 - $20,000 (4-8 weeks)</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#FE6A61] mb-3">Enhancement Phases</h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li><strong>Phase 1:</strong> $3,000 - $5,000 (2-4 weeks)</li>
              <li><strong>Phase 2:</strong> $3,000 - $5,000 (2-4 weeks)</li>
              <li><strong>Phase 3:</strong> $3,000 - $5,000 (2-4 weeks)</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-600 text-sm mt-4">
          Total estimated range: $15,000 - $36,000 over 14-27 weeks (all phases optional)
        </p>
      </section>

       {/* Support Options */}
       <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#FE6A61] mb-6 text-center">Ongoing Support Plans</h2>
        <p className="text-gray-600 mb-6 text-center max-w-3xl mx-auto">
          We offer tailored support for both websites and software we create, ensuring reliability and growth. Website plans include Firebase free-tier hosting (1 GB storage, 10 GB bandwidth, SSL), with overages (~$0.026/GB) billed to clients.
        </p>

        {/* Website Support */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-[#FE6A61] mb-4 text-center">Website Support</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Small Website */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 className="text-lg font-bold text-[#FE6A61] mb-2">Small Website</h4>
              <p className="text-gray-700 text-sm mb-2">Portfolios, Landing Pages (&lt;5K visits/mo)</p>
              <ul className="text-gray-600 text-sm list-disc list-inside">
                <li><strong>Basic:</strong> Free Yr 1, then $60/yr – Hosting, domain (2 yrs), 2 updates/yr, weekly scans/backups, email support</li>
                <li><strong>Standard:</strong> $120/yr – +5 GB bandwidth, 6 updates/yr, malware removal, daily backups, email and phone support</li>
                <li><strong>Premium:</strong> $240/yr – +10 GB bandwidth, 24 updates/yr, real-time security, off-site backups, email and phone support</li>
              </ul>
            </div>
            {/* Medium Website */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 className="text-lg font-bold text-[#FE6A61] mb-2">Medium Website</h4>
              <p className="text-gray-700 text-sm mb-2">Blogs, Small E-commerce (5K-50K visits/mo)</p>
              <ul className="text-gray-600 text-sm list-disc list-inside">
                <li><strong>Basic:</strong> $180/yr – +5 GB bandwidth, domain (2 yrs), 6 updates/yr, daily backups, email support</li>
                <li><strong>Standard:</strong> $360/yr – +10 GB bandwidth, 24 updates/yr, unlimited malware fixes, CMS, email and phone support</li>
                <li><strong>Premium:</strong> $600/yr – Unlimited bandwidth, unlimited updates, advanced security, hourly backups, email and phone support</li>
              </ul>
            </div>
            {/* Large Website */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 className="text-lg font-bold text-[#FE6A61] mb-2">Large Website</h4>
              <p className="text-gray-700 text-sm mb-2">E-commerce, Corporate (50K+ visits/mo)</p>
              <ul className="text-gray-600 text-sm list-disc list-inside">
                <li><strong>Basic:</strong> $480/yr – +10 GB bandwidth, domain (2 yrs), 12 updates/yr, malware removal, daily backups</li>
                <li><strong>Standard:</strong> $900/yr – Unlimited bandwidth, 36 updates/yr, real-time security, hourly backups, email and phone support</li>
                <li><strong>Premium:</strong> $1,500/yr – Unlimited updates, 5 hrs custom dev, full security suite, dedicated manager</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Software Support */}
        <div>
          <h3 className="text-2xl font-bold text-[#FE6A61] mb-4 text-center">Software Support</h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Small Software */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 className="text-lg font-bold text-[#FE6A61] mb-2">Small Software</h4>
              <p className="text-gray-700 text-sm mb-2">Tools, Calculators (&lt;100 users)</p>
              <ul className="text-gray-600 text-sm list-disc list-inside">
                <li><strong>Basic:</strong> $90/yr – 2 updates/yr, 2 bug fixes, email support</li>
                <li><strong>Standard:</strong> $180/yr – 6 updates/yr, unlimited fixes, 1 hr tweaks, email and phone support</li>
                <li><strong>Premium:</strong> $360/yr – 12 updates/yr, priority fixes, 3 hrs dev, email and phone support</li>
              </ul>
            </div>
            {/* Medium Software */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 className="text-lg font-bold text-[#FE6A61] mb-2">Medium Software</h4>
              <p className="text-gray-700 text-sm mb-2">Productivity, Small CRM (100-1K users)</p>
              <ul className="text-gray-600 text-sm list-disc list-inside">
                <li><strong>Basic:</strong> $240/yr – 6 updates/yr, 4 fixes, 1 hr tweaks, email</li>
                <li><strong>Standard:</strong> $480/yr – 12 updates/yr, unlimited fixes, 3 hrs dev, email and phone support</li>
                <li><strong>Premium:</strong> $900/yr – 24 updates/yr, priority fixes, 6 hrs dev, email and phone support</li>
              </ul>
            </div>
            {/* Large Software */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 className="text-lg font-bold text-[#FE6A61] mb-2">Large Software</h4>
              <p className="text-gray-700 text-sm mb-2">E-commerce, SaaS (1K-10K users)</p>
              <ul className="text-gray-600 text-sm list-disc list-inside">
                <li><strong>Basic:</strong> $600/yr – 12 updates/yr, 6 fixes, 2 hrs tweaks, email and phone support</li>
                <li><strong>Standard:</strong> $1,200/yr – 24 updates/yr, unlimited fixes, 5 hrs dev, email and phone support</li>
                <li><strong>Premium:</strong> $2,400/yr – Unlimited updates, priority fixes, 10 hrs dev, dedicated manager</li>
              </ul>
            </div>
            {/* Enterprise Software */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 className="text-lg font-bold text-[#FE6A61] mb-2">Enterprise Software</h4>
              <p className="text-gray-700 text-sm mb-2">ERP, Large SaaS (10K+ users)</p>
              <ul className="text-gray-600 text-sm list-disc list-inside">
                <li><strong>Basic:</strong> $1,800/yr – 12 updates/yr, unlimited fixes, 5 hrs tweaks, email and phone support</li>
                <li><strong>Standard:</strong> $3,600/yr – 24 updates/yr, priority fixes, 10 hrs dev, dedicated manager</li>
                <li><strong>Premium:</strong> $6,000/yr – Unlimited updates, 24/7 team fixes, 20 hrs dev, dedicated manager</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-[#FE6A61] mb-4">Ready to Start?</h2>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          Begin with our $1,000 Discovery phase to define your MVP. Get a detailed plan and 
          accurate pricing with no obligation to continue beyond any phase.
        </p>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#FE6A61] text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-[#d85b52] transition-all hover:shadow-xl transform hover:scale-105"
        >
          Start Your Discovery Today
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