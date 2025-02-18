function ServiceCard({ title, description }) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-all duration-300">
        <h3 className="text-2xl font-bold text-[#FE6A61] mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  
  export default ServiceCard;
  