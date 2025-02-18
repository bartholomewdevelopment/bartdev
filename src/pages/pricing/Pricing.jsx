import PricingTable from "../../components/PricingTable";

function Pricing() {
  return (
    <div className="container mx-auto px-6 py-12 text-gray-800 font-nexa">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#FE6A61]">Our Pricing Plans</h1>
      <p className="text-lg text-center mb-12">
        Choose the perfect plan for your business. Simple pricing, no hidden fees.
      </p>

      <PricingTable />
    </div>
  );
}

export default Pricing;
