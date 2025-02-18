import ServiceCard from "../../components/ServiceCard";

function IdeaSprint() {
  return (
    <div className="container mx-auto px-6 py-12 text-gray-800 font-nexa">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#FE6A61]">Idea Sprint</h1>
      <p className="text-lg text-center mb-12">
        A structured framework to validate and refine your startup ideas quickly.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <ServiceCard 
          title="Market Validation" 
          description="Assess demand and viability before full-scale development."
        />
        <ServiceCard 
          title="Rapid Prototyping" 
          description="Quickly test ideas with interactive mockups and prototypes."
        />
        <ServiceCard 
          title="Investor-Ready Strategy" 
          description="Develop a strategy that attracts investors and partners."
        />
      </div>

      {/* Call to Action */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-[#FE6A61]">Validate Your Startup Idea</h2>
        <p className="text-lg text-gray-600 mt-2">
          Get expert insights and refine your idea for maximum success.
        </p>
        <a href="/pricing">
          <button className="mt-6 bg-[#FE6A61] text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-[#d85b52] transition-all">
            Get Started
          </button>
        </a>
      </div>
    </div>
  );
}

export default IdeaSprint;
