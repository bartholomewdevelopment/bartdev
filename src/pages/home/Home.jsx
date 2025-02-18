import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import { Services } from "../../components/Services";
import { Portfolio } from "../../components/Portfolio";
import CallToAction from "../../components/CallToAction";
import Testimonials from "../../components/Testimonials";
import FAQ from "../../components/FAQ";
// import PricingTable from "../../components/PricingTable";

export const Home = () => {
  return (
    <div className="text-gray-800 font-nexa">
      {/* Move Banner OUTSIDE the container to make it full-width */}
      <Banner />

      {/* Wrap the rest of the content inside a container */}
      <div className="container mx-auto px-6 py-12">
       
      <Services />
      <Portfolio />
       
        {/* <CallToAction />
        <Testimonials />
        <FAQ /> */}

        {/* Pricing CTA Section */}
        {/* <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-[#FE6A61]">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mt-2">
            Choose the right plan and launch your project today!
          </p>
          <Link to="/pricing">
            <button className="mt-6 bg-[#FE6A61] text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-[#d85b52] transition-all">
              View Pricing & Order Services
            </button>
          </Link>
        </div> */}

        {/* <PricingTable /> */}
      </div>
    </div>
  );
};

export default Home;
