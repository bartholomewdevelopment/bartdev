import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Portfolio from "./pages/portfolio/Portfolio";
import Pricing from "./pages/pricing/Pricing";
import Services from "./components/Services";  // ✅ Services is a component, not a page
import WebDevelopment from "./pages/services/WebDevelopment";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import MVPDevelopment from "./pages/services/MVPDevelopment";
import OngoingSupport from "./pages/services/OngoingSupport";
import IdeaSprint from "./pages/services/IdeaSprint";
import BartDevStartupLab from "./pages/services/BartDevStartupLab";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="pricing" element={<Pricing />} />
          
          {/* Services is now a component inside its route */}
          <Route path="services" element={<Services />} />

          {/* Individual Services Pages */}
          <Route path="services/web-development" element={<WebDevelopment />} />
          <Route path="services/software-development" element={<SoftwareDevelopment />} />
          <Route path="services/mvp-development" element={<MVPDevelopment />} />
          <Route path="services/ongoing-support" element={<OngoingSupport />} />
          <Route path="services/idea-sprint" element={<IdeaSprint />} />
          <Route path="services/bartdev-startup-lab" element={<BartDevStartupLab />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
