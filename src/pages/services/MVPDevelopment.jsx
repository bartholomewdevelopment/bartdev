import ServiceCard from "../../components/ServiceCard";

function MVPDevelopment() {
  return (
    <div className="container mx-auto px-6 py-12 text-gray-800 font-nexa">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#FE6A61]">MVP Development</h1>
      <p className="text-lg text-center mb-12">
        Bringing startup ideas to life with lean and scalable MVPs.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <ServiceCard title="Prototype Development" description="Rapidly create interactive prototypes to validate your idea." />
        <ServiceCard title="User Testing & Feedback" description="Gather valuable insights before launching your final product." />
        <ServiceCard title="Scalable MVP Architecture" description="Build a minimal viable product with future growth in mind." />
      </div>
    </div>
  );
}

export default MVPDevelopment;
