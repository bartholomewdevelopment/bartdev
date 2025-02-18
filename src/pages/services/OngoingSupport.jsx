import ServiceCard from "../../components/ServiceCard";

function OngoingSupport() {
  return (
    <div className="container mx-auto px-6 py-12 text-gray-800 font-nexa">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#FE6A61]">Ongoing Support & Maintenance</h1>
      <p className="text-lg text-center mb-12">
        Ensuring your software remains secure, updated, and efficient.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <ServiceCard title="Security Patches & Updates" description="Regular security enhancements to protect your business." />
        <ServiceCard title="Performance Monitoring" description="Track and optimize your system for peak performance." />
        <ServiceCard title="Feature Enhancements" description="Continuous improvements to adapt to your evolving needs." />
      </div>
    </div>
  );
}

export default OngoingSupport;
