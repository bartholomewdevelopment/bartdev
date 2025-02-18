import ServiceCard from "../../components/ServiceCard";

function SoftwareDevelopment() {
  return (
    <div className="container mx-auto px-6 py-12 text-gray-800 font-nexa">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#FE6A61]">Software Development</h1>
      <p className="text-lg text-center mb-12">
        Custom software solutions designed for efficiency and scalability.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <ServiceCard title="Enterprise Software" description="We develop high-performance software for large-scale businesses." />
        <ServiceCard title="Custom CRM Development" description="Streamline your business operations with a tailored CRM." />
        <ServiceCard title="Automated Business Solutions" description="Improve productivity with AI-driven automation tools." />
      </div>
    </div>
  );
}

export default SoftwareDevelopment;
