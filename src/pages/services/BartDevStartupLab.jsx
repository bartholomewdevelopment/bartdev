import React from 'react';
import ServiceCard from "../../components/ServiceCard";

function BartDevStartupLab() {
  const phases = [
    {
      title: "Phase 1: Validate the Problem",
      weeks: "Weeks 1-3",
      goal: "Ensure a real, urgent customer pain exists before building anything.",
      outcome: "You will know whether your business idea solves a high-priority problem for a real audience.",
      deliverables: ["Validated Problem Statement", "Customer Interview Insights", "Competitor Research"]
    },
    {
      title: "Phase 2: Validate the Solution & Business Model",
      weeks: "Weeks 4-7",
      goal: "Prove that customers will pay for your solution before full development.",
      outcome: "You will know if your product concept is viable, desirable, and sellable before investing in full-scale development.",
      deliverables: ["MVP Prototype", "Solution Interviews", "Pre-Sales or Paying Customers", "Go-To-Market Strategy"]
    },
    {
      title: "Phase 3: Build a Repeatable Sales & Marketing Process",
      weeks: "Weeks 8-10",
      goal: "Develop a scalable system for acquiring and retaining customers.",
      outcome: "A repeatable sales process that can grow with your business.",
      deliverables: ["Lead Generation Strategy", "First 100 Customers", "Customer Acquisition Plan"]
    },
    {
      title: "Phase 4: Scale Operations & Optimize Pricing",
      weeks: "Weeks 11-12",
      goal: "Transition from startup hustle to structured business growth with optimized revenue, hiring, and long-term scalability.",
      outcome: "You will have a solid operational foundation to scale without breaking your processes.",
      deliverables: ["Revenue Optimization", "Team Expansion", "Process Automation", "Funding Strategy"]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12 text-gray-800 font-nexa">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#FE6A61]">BartDev Startup Lab</h1>
      <p className="text-lg text-center mb-12">
        At BartDev Startup Lab, we validate your startup idea with real customers before writing any code. Our method emphasizes Customer Validation and Development first, ensuring your product meets actual market demands, not just assumptions.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <ServiceCard title="Lean Startup Strategy" description="Customer discovery, problem validation, and early-stage business model refinement." />
        <ServiceCard title="MVP Development & Launch" description="UI/UX prototyping, software development, and beta testing." />
        <ServiceCard title="Fractional CTO Services" description="Ongoing mentorship, team-building, and technical leadership for startups." />
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#FE6A61] mb-4 text-center">The 4-Phase Process</h2>
        <div className="flex flex-col items-center">
          {phases.map((phase, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg mb-4 max-w-md w-full">
              <h3 className="text-2xl font-bold text-[#FE6A61] mb-3">{phase.title} <span className="text-sm text-gray-500">({phase.weeks})</span></h3>
              <p className="text-gray-700 mb-2"><strong>Goal:</strong> {phase.goal}</p>
              <p className="text-gray-700 mb-2"><strong>Outcome:</strong> {phase.outcome}</p>
              <p className="text-gray-700 mb-2"><strong>Key Deliverables:</strong></p>
              <ul className="list-disc list-inside">
                {phase.deliverables.map((deliverable, idx) => (
                  <li key={idx} className="text-gray-700">{deliverable}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold text-[#FE6A61] mb-4">Pricing Considerations</h2>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          Pricing for our Startup Lab services is tailored to your specific project needs and will be established after initial discussions to understand your startup's stage, requirements, and goals. We aim to create packages that maximize value for your startup's growth.
        </p>
        <a href="https://app.usemotion.com/meet/joseph-bartholomew-wq0p/bartdev-meeting" target="_blank" rel="noopener noreferrer">
          <button 
            className="bg-[#FE6A61] text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-[#d85b52] transition-all hover:shadow-xl transform hover:scale-105"
          >
            Discuss Your Startup Needs
          </button>
        </a>
      </section>
    </div>
  );
}

export default BartDevStartupLab;