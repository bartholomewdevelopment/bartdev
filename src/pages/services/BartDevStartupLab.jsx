import ServiceCard from "../../components/ServiceCard";

function BartDevStartupLab() {
  return (
    <div className="container mx-auto px-6 py-12 text-gray-800 font-nexa">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#FE6A61]">BartDev Startup Lab</h1>
      <p className="text-lg text-center mb-12">
        Incubating and accelerating promising startups with expert guidance.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <ServiceCard title="Business Coaching" description="Get mentorship from industry experts to refine your startup." />
        <ServiceCard title="Funding Strategies" description="Explore funding opportunities and secure investment." />
        <ServiceCard title="Technical Development" description="Get end-to-end support in building your product." />
      </div>
    </div>
  );
}

export default BartDevStartupLab;
