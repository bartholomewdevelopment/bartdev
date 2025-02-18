import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/home/Home";
import WebDevelopment from "./pages/services/WebDevelopment";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import MVPDevelopment from "./pages/services/MVPDevelopment";
import OngoingSupport from "./pages/services/OngoingSupport";
import Portfolio from "./pages/portfolio/Portfolio";
import Pricing from "./pages/pricing/Pricing";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="services/web-development" element={<WebDevelopment />} />
          <Route path="services/software-development" element={<SoftwareDevelopment />} />
          <Route path="services/mvp-development" element={<MVPDevelopment />} />
          <Route path="services/ongoing-support" element={<OngoingSupport />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
