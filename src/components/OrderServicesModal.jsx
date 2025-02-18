import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const OrderServicesModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const serviceOptions = [
    { category: "Website Development", services: [
        { name: "Simple Website", price: "$500 - $1,500" },
        { name: "Larger Website", price: "$2,000 - $5,000" },
      ]},
    { category: "Software Development", services: [
        { name: "Small Software Project", price: "$5,000 - $10,000" },
        { name: "Medium Software Project", price: "$15,000 - $25,000" },
      ]},
    { category: "Ongoing Support & Maintenance", services: [
        { name: "Retainer Model", price: "$500 - $5,000/month" },
      ]},
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_bpgecwg",
      "template_sca3nos",
      formData,
      "-FGqvzXuTYnZckP4F"
    )
    .then((result) => {
      toast.success("Request submitted successfully!");
      setFormData({ name: "", email: "", service: "", message: "" });
      onClose(); // Close modal after submission
    })
    .catch((error) => {
      toast.error("Something went wrong. Please try again.");
      console.error(error.text);
    });
  };

  if (!isOpen) return null; // Prevents rendering if modal is closed

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] md:w-[500px] shadow-lg relative">
        <button className="absolute top-2 right-3 text-xl" onClick={onClose}>✖</button>
        <h2 className="text-2xl font-bold text-center text-[#FE6A61]">Order a Service</h2>
        <p className="text-gray-700 text-center mt-2">Fill out the form to request a service.</p>

        <form onSubmit={handleSubmit} className="mt-4">
          {/* Name Input */}
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required
            className="w-full p-2 border rounded-md mt-2"
          />

          {/* Email Input */}
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required
            className="w-full p-2 border rounded-md mt-2"
          />

          {/* Service Selection */}
          <select 
            name="service" 
            value={formData.service} 
            onChange={handleChange} 
            required
            className="w-full p-2 border rounded-md mt-2"
          >
            <option value="" disabled>Select a Service</option>
            {serviceOptions.map((category, index) => (
              <optgroup key={index} label={category.category}>
                {category.services.map((service, idx) => (
                  <option key={idx} value={service.name}>
                    {service.name} ({service.price})
                  </option>
                ))}
              </optgroup>
            ))}
          </select>

          {/* Message Input */}
          <textarea 
            name="message" 
            placeholder="Additional Details (Optional)" 
            value={formData.message} 
            onChange={handleChange} 
            className="w-full p-2 border rounded-md mt-2"
          ></textarea>

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button type="button" className="px-4 py-2 text-gray-700 border rounded-md" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-[#FE6A61] text-white rounded-md">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderServicesModal;
