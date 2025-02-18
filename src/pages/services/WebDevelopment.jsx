import ServiceCard from "../../components/ServiceCard";

function WebDevelopment() {
  return (
    <div className="container mx-auto px-6 py-12 text-gray-800 font-nexa">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#FE6A61]">Web Development Services</h1>
      <p className="text-lg text-center mb-12">
        We build high-quality websites tailored to your business needs.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <ServiceCard title="Custom Websites" description="We create stunning, responsive websites tailored to your brand." />
        <ServiceCard title="E-Commerce Solutions" description="Build an online store with smooth payment and shopping experiences." />
        <ServiceCard title="SEO & Performance" description="Optimize your website for better search rankings and faster speeds." />
      </div>
    </div>
  );
}

export default WebDevelopment;
