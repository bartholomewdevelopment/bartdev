function PricingTable() {
    return (
      <div className="grid md:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-[#FE6A61] mb-4">Basic</h3>
          <p className="text-gray-600 mb-6">For small businesses & startups.</p>
          <h2 className="text-3xl font-bold mb-4">$500+</h2>
          <ul className="text-gray-600 space-y-2">
            <li>✔ Custom Website</li>
            <li>✔ Mobile Responsive</li>
            <li>✔ SEO Optimization</li>
            <li>✔ Basic Support</li>
          </ul>
          <button className="mt-6 bg-[#FE6A61] text-white px-6 py-2 rounded-lg hover:bg-[#d85b52] transition-all">
            Get Started
          </button>
        </div>
  
        {/* Business Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-[#FE6A61] mb-4">Business</h3>
          <p className="text-gray-600 mb-6">For growing businesses & agencies.</p>
          <h2 className="text-3xl font-bold mb-4">$2,000+</h2>
          <ul className="text-gray-600 space-y-2">
            <li>✔ E-Commerce Ready</li>
            <li>✔ CMS Integration</li>
            <li>✔ SEO + Performance Optimization</li>
            <li>✔ Premium Support</li>
          </ul>
          <button className="mt-6 bg-[#FE6A61] text-white px-6 py-2 rounded-lg hover:bg-[#d85b52] transition-all">
            Get Started
          </button>
        </div>
  
        {/* Enterprise Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-[#FE6A61] mb-4">Enterprise</h3>
          <p className="text-gray-600 mb-6">For large businesses & complex needs.</p>
          <h2 className="text-3xl font-bold mb-4">Custom Quote</h2>
          <ul className="text-gray-600 space-y-2">
            <li>✔ Advanced Features</li>
            <li>✔ Custom Development</li>
            <li>✔ AI & Automation</li>
            <li>✔ Dedicated Support</li>
          </ul>
          <button className="mt-6 bg-[#FE6A61] text-white px-6 py-2 rounded-lg hover:bg-[#d85b52] transition-all">
            Contact Us
          </button>
        </div>
      </div>
    );
  }
  
  export default PricingTable;
  