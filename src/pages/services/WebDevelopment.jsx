import ServiceCard from "../../components/ServiceCard";

function WebDevelopment() {
  return (
    <div>
      <h1>Web Development Services</h1>
      <p>We build high-quality websites tailored to your business needs.</p>
      
      {/* Use ServiceCard component here */}
      <ServiceCard 
        title="Custom Websites" 
        description="We create stunning, responsive websites tailored to your brand."
      />
      <ServiceCard 
        title="E-Commerce Solutions" 
        description="Build an online store with smooth payment and shopping experiences."
      />
      <ServiceCard 
        title="SEO & Performance" 
        description="Optimize your website for better search rankings and faster speeds."
      />
    </div>
  );
}

export default WebDevelopment;
