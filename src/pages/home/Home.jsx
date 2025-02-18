import Banner from "../../components/Banner";
import { Services } from "../../components/Services";
import { Portfolio } from "../../components/Portfolio";
import CallToAction from "../../components/CallToAction";
import Testimonials from "../../components/Testimonials";
import FAQ from "../../components/FAQ";
import PricingTable from "../../components/PricingTable";

export const Home = () => {
  return (
    <div>
      <Banner />
      <Portfolio />
      <Services />
      <CallToAction />
      <Testimonials />
      <FAQ />
      <PricingTable />
    </div>
  );
};

export default Home;
