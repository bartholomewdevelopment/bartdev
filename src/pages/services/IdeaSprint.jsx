import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import { MapPin, Calendar, Users, FileText, CheckCircle, Clock, ChevronDown } from "lucide-react";

// Set the app element for accessibility
Modal.setAppElement('#root');

function IdeaSprint() {
  const [countdown, setCountdown] = useState("");
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const address = "7 Spruce St, Gallipolis, OH 45631";
  const apiKey = "AIzaSyBuPUUWFtmeRc4jD_SOABYSWLUdxi6NvV8";

  // Calculate countdown to next event
  useEffect(() => {
    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + ((14 - eventDate.getDay()) % 14 || 14)); // Next event in 2 weeks
    eventDate.setHours(18, 0, 0); // 6:00 PM event time

    const updateCountdown = () => {
      const now = new Date();
      const diff = eventDate - now;
      if (diff <= 0) {
        setCountdown("Happening Now!");
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      setCountdown(`${days}d ${hours}h ${minutes}m`);
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 60000);
    return () => clearInterval(timer);
  }, []);

  // FAQ Accordion toggle
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const openMapModal = () => {
    setIsMapModalOpen(true);
  };

  const closeMapModal = () => {
    setIsMapModalOpen(false);
  };

  // Function to handle file download
  const handleDownload = (phaseNumber) => {
    const fileName = {
      1: "Phase 1 - Month 1.pdf",
      2: "Phase 2 - Month 2.pdf",
      3: "Phase 3 - Month 3.pdf",
      4: "Phase 4 - Month 4.pdf"
    }[phaseNumber];

    if (fileName) {
      const link = document.createElement('a');
      link.href = `/Assets/Downloads/${fileName}`;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error('File not found for phase:', phaseNumber);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 text-gray-800 font-nexa">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] flex items-center justify-center text-center text-white bg-gradient-to-r from-[#FE6A61] to-[#d85b52] shadow-lg">
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg" />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold animate-slide-in">Idea Sprint</h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto animate-fade-in-delay">
            Have a great software idea but don’t know where to start? 
          </p> 
          <p className="text-xl mt-4 max-w-2xl mx-auto animate-fade-in-delay">
            Idea Sprint is a free, high-impact consultation designed to help you test, refine, and validate your business idea before you invest time and money into development. Reserve your spot today or show up for a first-come, first-served session. No strings attached. No sales pitch. Just real value.
          </p>
          <div className="mt-6 flex flex-col items-center space-y-4">
            <span className="text-lg bg-white text-[#FE6A61] px-4 py-2 rounded-full shadow-lg font-bold animate-pulse">
              Next Event: <span dangerouslySetInnerHTML={{ __html: countdown.replace(/d|h|m/, (match) => ` <span class="text-red-500">${match}</span>`) }} />
            </span>
            <a href="https://your-signup-link.com" aria-label="Reserve your spot for the next Idea Sprint event">
              <button className="bg-white text-[#FE6A61] px-6 py-3 rounded-lg text-lg font-bold hover:bg-gray-200 transition-all hover:shadow-lg">
                Reserve Your Spot
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Event Info Section */}
      <div className="grid md:grid-cols-3 gap-6 text-center py-12">
        {[
          {
            icon: (
              <button onClick={openMapModal}>
                <MapPin size={40} className="mx-auto text-[#FE6A61] hover:text-[#D85B52] transition-colors" />
              </button>
            ),
            title: "Location",
            details: ["Bossard Memorial Library", "7 Spruce St, Gallipolis, OH", "Switzer Room"]
          },
          {
            icon: <Calendar size={40} className="mx-auto text-[#FE6A61]" />,
            title: "When?",
            details: ["Two Days Every Month", "Signups Get Priority", "Walk-ins Welcome"]
          },
          {
            icon: <Users size={40} className="mx-auto text-[#FE6A61]" />,
            title: "Who Can Join?",
            details: ["Entrepreneurs in Gallipolis", "Startups & Early-Stage Founders"]
          }
        ].map((info, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded-lg hover:shadow-lg transition-all">
            {info.icon}
            <h3 className="text-2xl font-bold mt-4">{info.title}</h3>
            <ul className="mt-3 space-y-1">
              {info.details.map((line, i) => <li key={i} className="text-lg">{line}</li>)}
            </ul>
          </div>
        ))}

        {/* Modal for Google Map */}
        <Modal 
          isOpen={isMapModalOpen}
          onRequestClose={closeMapModal}
          contentLabel="Google Map Modal"
          className="modal"
          overlayClassName="overlay"
        >
          <button onClick={closeMapModal} className="close-button">X</button>
          <div style={{ width: '100%', height: '400px' }}>
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(address)}&key=${apiKey}`} 
              allowFullScreen
            ></iframe>
          </div>
        </Modal>
      </div>

      {/* How It Works - 4-Phase Process */}
      <div className="text-center my-16">
        <h2 className="text-4xl font-bold text-[#FE6A61] mb-4">The 4-Phase Process</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          A structured roadmap to validate and develop your business idea.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {[
            {
              title: "Phase 1: Validate the Problem (Weeks 1-3)",
              description: "Ensure a real, urgent customer pain exists before building anything.",
              deliverables: ["Validated Problem Statement", "Customer Interview Insights", "Competitor Research"]
            },
            {
              title: "Phase 2: Validate the Solution & Business Model (Weeks 4-7)",
              description: "Prove that customers will pay for your solution before full development.",
              deliverables: ["MVP Prototype", "Pre-Sales or Paying Customers", "Go-To-Market Strategy"]
            },
            {
              title: "Phase 3: Build a Repeatable Sales & Marketing Process (Weeks 8-10)",
              description: "Develop a scalable system for acquiring and retaining customers.",
              deliverables: ["Lead Generation Strategy", "First 100 Customers", "Content Marketing & SEO"]
            },
            {
              title: "Phase 4: Scale Operations & Optimize Pricing (Weeks 11-12)",
              description: "Transition from startup hustle to structured business growth with optimized revenue, hiring, and long-term scalability.",
              deliverables: ["Optimized Pricing Model", "Hiring Plan", "Process Automation"]
            }
          ].map((phase, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 w-full max-w-sm">
              <h3 className="text-2xl font-bold text-[#FE6A61] mb-2">{phase.title}</h3>
              <div className="p-3 bg-white rounded-md shadow-sm border-l-4 border-[#FE6A61]">
                <p className="text-sm text-gray-700 mb-3">{phase.description}</p>
                <h4 className="text-base font-semibold text-[#FE6A61] mb-2">Deliverables:</h4>
                <ul className="space-y-2">
                  {phase.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-700 hover:text-[#FE6A61] transition-colors">
                      <CheckCircle size={16} className="text-[#FE6A61] mr-2 mt-1" /> {item}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => handleDownload(index + 1)}
                  className="mt-4 w-full py-2 px-4 bg-[#FE6A61] text-white rounded-md hover:bg-[#fd5e54] transition-colors duration-200"
                >
                  Download Resources
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-[#FE6A61]">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4 max-w-2xl mx-auto">
          {[
            {
              question: "What should I bring?",
              answer: "Anything you have related to your business idea, any work you've done on the business plan or the product ideation."
            },
            {
              question: "How long does each session last?",
              answer: "Between 90 minutes and 2 hours. Due to timeslots, it cannot go more than 2 hours."
            },
            {
              question: "Is there a cost to join?",
              answer: "Absolutely Not! Totally free, no strings attached. Come here to learn and get free advice and resources."
            },
            {
              question: "Can I attend virtually?",
              answer: "As this is a service for those local to Gallia County and its surrounding areas, this will be an in-person only event."
            },
            {
              question: "Who should attend?",
              answer: "Entrepreneurs & Startups who have a new business idea, Small Business Owners looking to expand into software or digital solutions, Students & Innovators testing their first software project, and Anyone curious about the startup process & software development"
            }
          ].map((faq, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <button 
                className="w-full text-left flex justify-between items-center font-bold text-lg" 
                onClick={() => toggleFAQ(index)}
                aria-expanded={openFAQ === index ? "true" : "false"}
              >
                {faq.question} <ChevronDown size={20} className={`transition-transform ${openFAQ === index ? "rotate-180" : ""}`} />
              </button>
              <div className={`mt-2 text-gray-600 overflow-hidden transition-all ${openFAQ === index ? "max-h-96" : "max-h-0"}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Signup CTA */}
      <div className="text-center py-12">
        <a href="https://your-signup-link.com" aria-label="Sign up for Idea Sprint">
          <button className="bg-[#FE6A61] text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-[#d85b52] transition-all hover:shadow-xl transform hover:scale-105">
            Reserve Your Spot
          </button>
        </a>
      </div>
    </div>
  );
}

export default IdeaSprint;