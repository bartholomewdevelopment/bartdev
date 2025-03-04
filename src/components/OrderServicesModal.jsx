import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const OrderServicesModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1); // Tracks modal steps
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "", // Website, Software, or Support
    type: "", // For Support: Website or Software
    size: "", // Small, Medium, Large, Enterprise
    support: "", // Basic, Standard, Premium, or Decline
    message: "",
  });

  // Development cost options
  const websiteOptions = [
    { name: "Small Project", price: "$500 - $1,500" },
    { name: "Medium Project", price: "$1,500 - $3,500" },
    { name: "Large Project", price: "$3,500 - $6,000" },
  ];

  const softwareOptions = [
    { name: "Small Project", price: "$5,000 - $10,000" },
    { name: "Medium Project", price: "$10,000 - $15,000" },
    { name: "Large Project", price: "$15,000 - $50,000" },
    { name: "Enterprise Project", price: "$50,000+" },
  ];

  // Support tiers
  const supportOptions = {
    Website: {
      "Small Project": [
        { name: "Basic Tier", price: "$20/month", desc: "Hosting, security updates, email support" },
        { name: "Standard Tier", price: "$50/month", desc: "Adds backups, 1 hr/month edits, priority email" },
        { name: "Premium Tier", price: "$100/month", desc: "Adds optimization, analytics, 2 hrs/month edits, phone" },
        { name: "Decline Support", price: "No recurring fees" },
      ],
      "Medium Project": [
        { name: "Basic Tier", price: "$75/month", desc: "Hosting, security, plugin updates, email support" },
        { name: "Standard Tier", price: "$150/month", desc: "Adds backups, 2 hrs/month edits, e-commerce, priority email" },
        { name: "Premium Tier", price: "$250/month", desc: "Adds SEO, uptime monitoring, 4 hrs/month edits, phone" },
        { name: "Decline Support", price: "No recurring fees" },
      ],
      "Large Project": [
        { name: "Basic Tier", price: "$200/month", desc: "Hosting, security, basic updates, email support" },
        { name: "Standard Tier", price: "$400/month", desc: "Adds backups, 4 hrs/month edits, tuning, priority email" },
        { name: "Premium Tier", price: "$750/month", desc: "Adds analytics, 8 hrs/month edits, account manager, 24/7" },
        { name: "Decline Support", price: "No recurring fees" },
      ],
    },
    Software: {
      "Small Project": [
        { name: "Basic Tier", price: "$10/month", desc: "Bug fixes, email support" },
        { name: "Standard Tier", price: "$25/month", desc: "Adds minor updates, priority email" },
        { name: "Premium Tier", price: "$50/month", desc: "Adds 1 hr/month tweaks, phone" },
        { name: "Decline Support", price: "No recurring fees" },
      ],
      "Medium Project": [
        { name: "Basic Tier", price: "$50/month", desc: "Bug fixes, basic updates, email support" },
        { name: "Standard Tier", price: "$100/month", desc: "Adds enhancements, 1 hr/month custom, priority email" },
        { name: "Premium Tier", price: "$200/month", desc: "Adds 2 hrs/month custom, optimization, phone" },
        { name: "Decline Support", price: "No recurring fees" },
      ],
      "Large Project": [
        { name: "Basic Tier", price: "$150/month", desc: "Bug fixes, security updates, email support" },
        { name: "Standard Tier", price: "$300/month", desc: "Adds updates, 2 hrs/month custom, priority email" },
        { name: "Premium Tier", price: "$600/month", desc: "Adds 4 hrs/month custom, dedicated line, monitoring" },
        { name: "Decline Support", price: "No recurring fees" },
      ],
      "Enterprise Project": [
        { name: "Basic Tier", price: "$1,000/month", desc: "Bug fixes, security, email, 4 hrs/month" },
        { name: "Standard Tier", price: "$2,500/month", desc: "Adds development, 10 hrs/month, phone, uptime" },
        { name: "Premium Tier", price: "$5,000+/month", desc: "Adds 20 hrs/month, 24/7, SLA, on-site" },
        { name: "Decline Support", price: "No recurring fees" },
      ],
    },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCategorySelect = (category) => {
    setFormData({ ...formData, category });
    setStep(2);
  };

  const handleTypeSelect = (type) => {
    setFormData({ ...formData, type });
    setStep(3);
  };

  const handleSizeSelect = (size) => {
    setFormData({ ...formData, size });
    setStep(formData.category === "Support" ? 4 : 3); // Support to Step 4, Website/Software to Step 3
  };

  const handleSupportSelect = (support) => {
    setFormData({ ...formData, support });
    setStep(formData.category === "Support" ? 5 : 4); // Support to Step 5, Website/Software to Step 4
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullService = `${formData.category}${formData.type ? ` (${formData.type})` : ''} - ${formData.size} (${formData.support})`;
    const submissionData = { ...formData, service: fullService };

    emailjs.send("service_bpgecwg", "template_sca3nos", submissionData, "-FGqvzXuTYnZckP4F")
      .then(() => {
        toast.success("Request submitted successfully!");
        setFormData({ name: "", email: "", category: "", type: "", size: "", support: "", message: "" });
        setStep(1);
        onClose();
      })
      .catch((error) => {
        toast.error("Something went wrong. Please try again.");
        console.error(error.text);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] md:w-[500px] shadow-lg relative">
        <button className="absolute top-2 right-3 text-xl" onClick={onClose}>✖</button>
        <h2 className="text-2xl font-bold text-center text-[#FE6A61]">Order a Service</h2>
        <p className="text-gray-700 text-center mt-2">Let’s get started.</p>

        {/* Step 1: Category Selection */}
        {step === 1 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Choose a Category</h3>
            <div className="flex flex-col gap-2 mt-2">
              <button onClick={() => handleCategorySelect("Website")} className="p-2 border rounded-md hover:bg-gray-100">Website</button>
              <button onClick={() => handleCategorySelect("Software")} className="p-2 border rounded-md hover:bg-gray-100">Software</button>
              <button onClick={() => handleCategorySelect("Support")} className="p-2 border rounded-md hover:bg-gray-100">Support</button>
            </div>
          </div>
        )}

        {/* Step 2: Type Selection (Support) or Size Selection (Website/Software) */}
        {step === 2 && formData.category === "Support" && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Choose Project Type</h3>
            <div className="flex flex-col gap-2 mt-2">
              <button onClick={() => handleTypeSelect("Website")} className="p-2 border rounded-md hover:bg-gray-100">Website</button>
              <button onClick={() => handleTypeSelect("Software")} className="p-2 border rounded-md hover:bg-gray-100">Software</button>
            </div>
            <button onClick={() => setStep(1)} className="mt-4 text-gray-700">Back</button>
          </div>
        )}

        {step === 2 && (formData.category === "Website" || formData.category === "Software") && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Choose Project Size ({formData.category})</h3>
            <div className="flex flex-col gap-2 mt-2">
              {(formData.category === "Website" ? websiteOptions : softwareOptions).map((option) => (
                <button
                  key={option.name}
                  onClick={() => handleSizeSelect(option.name)}
                  className="p-2 border rounded-md hover:bg-gray-100 text-left"
                >
                  {option.name} ({option.price})
                </button>
              ))}
            </div>
            <button onClick={() => setStep(1)} className="mt-4 text-gray-700">Back</button>
          </div>
        )}

        {/* Step 3: Size Selection (Support) or Support Options (Website/Software) */}
        {step === 3 && formData.category === "Support" && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Choose Project Size</h3>
            <div className="flex flex-col gap-2 mt-2">
              {(formData.type === "Website" ? websiteOptions : softwareOptions).map((option) => (
                <button
                  key={option.name}
                  onClick={() => handleSizeSelect(option.name)}
                  className="p-2 border rounded-md hover:bg-gray-100 text-left"
                >
                  {option.name}
                </button>
              ))}
            </div>
            <button onClick={() => setStep(2)} className="mt-4 text-gray-700">Back</button>
          </div>
        )}

        {step === 3 && (formData.category === "Website" || formData.category === "Software") && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Choose Support for {formData.size}</h3>
            <div className="flex flex-col gap-2 mt-2">
              {supportOptions[formData.category][formData.size].map((support) => (
                <button
                  key={support.name}
                  onClick={() => handleSupportSelect(support.name)}
                  className="p-2 border rounded-md hover:bg-gray-100 text-left"
                >
                  {support.name} ({support.price})<br />
                  <span className="text-sm text-gray-600">{support.desc}</span>
                </button>
              ))}
            </div>
            <button onClick={() => setStep(2)} className="mt-4 text-gray-700">Back</button>
          </div>
        )}

        {/* Step 4: Support Selection (Support) or Form (Website/Software) */}
        {step === 4 && formData.category === "Support" && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Choose Support for {formData.size}</h3>
            <div className="flex flex-col gap-2 mt-2">
              {supportOptions[formData.type][formData.size].filter(s => s.name !== "Decline Support").map((support) => (
                <button
                  key={support.name}
                  onClick={() => handleSupportSelect(support.name)}
                  className="p-2 border rounded-md hover:bg-gray-100 text-left"
                >
                  {support.name} ({support.price})<br />
                  <span className="text-sm text-gray-600">{support.desc}</span>
                </button>
              ))}
            </div>
            <button onClick={() => setStep(3)} className="mt-4 text-gray-700">Back</button>
          </div>
        )}

        {step === 4 && (formData.category === "Website" || formData.category === "Software") && (
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md mt-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md mt-2"
            />
            <textarea
              name="message"
              placeholder="Additional Details (Optional)"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded-md mt-2"
            />
            <div className="mt-2 text-sm text-gray-600">
              Selected: {formData.category} - {formData.size} ({formData.support})
            </div>
            <div className="flex justify-between mt-4">
              <button type="button" onClick={() => setStep(3)} className="px-4 py-2 text-gray-700 border rounded-md">
                Back
              </button>
              <button type="submit" className="px-4 py-2 bg-[#FE6A61] text-white rounded-md">
                Submit Request
              </button>
            </div>
          </form>
        )}

        {/* Step 5: Form Submission (Support) */}
        {step === 5 && formData.category === "Support" && (
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md mt-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md mt-2"
            />
            <textarea
              name="message"
              placeholder="Additional Details (Optional)"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded-md mt-2"
            />
            <div className="mt-2 text-sm text-gray-600">
              Selected: {formData.category} - {formData.size} ({formData.support})
            </div>
            <div className="flex justify-between mt-4">
              <button type="button" onClick={() => setStep(4)} className="px-4 py-2 text-gray-700 border rounded-md">
                Back
              </button>
              <button type="submit" className="px-4 py-2 bg-[#FE6A61] text-white rounded-md">
                Submit Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default OrderServicesModal;