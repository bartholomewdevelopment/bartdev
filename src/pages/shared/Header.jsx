import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from "react-icons/fi"; // Importing hamburger & close icons
import logo from "../../assets/logo.png";
import OrderServicesModal from "../../components/OrderServicesModal";

export const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to generate breadcrumb trail
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    return (
      <nav className="text-gray-600 text-sm mt-2">
        <Link to="/" className="hover:text-[#FE6A61]">Home</Link>
        {pathnames.map((value, index) => {
          const pathTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <span key={pathTo} className="text-gray-500">
              {" / "}
              <Link to={pathTo} className="hover:text-[#FE6A61] capitalize">
                {value.replace("-", " ")}
              </Link>
            </span>
          );
        })}
      </nav>
    );
  };

  return (
    <div className="bg-white shadow-xl sticky top-0 z-50">
      {/* Navigation & Logo */}
      <div className="w-[95%] md:w-[90%] xl:w-[1200px] mx-auto flex justify-between items-center h-[90px]">
        {/* Logo */}
        <Link to="/">
          <img className="w-[180px] md:w-[200px] xl:w-[220px]" src={logo} alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-[#FE6A61]">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-[#FE6A61]">Services</Link>
          <Link to="/about" className="text-gray-700 hover:text-[#FE6A61]">About</Link>
          <Link to="/portfolio" className="text-gray-700 hover:text-[#FE6A61]">Portfolio</Link>
          <Link to="/contact" className="text-gray-700 hover:text-[#FE6A61]">Contact</Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-[#FE6A61] focus:outline-none"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Order Services Button - Opens Modal */}
        <div className="hidden md:block">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="py-2 text-[#FE6A61] border-[#FE6A61] border hover:text-white hover:bg-[#FE6A61] rounded-lg px-6 shadow-lg text-[16px]"
          >
            Order Services
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link to="/" className="text-gray-700 hover:text-[#FE6A61]" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-[#FE6A61]" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#FE6A61]" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-[#FE6A61]" onClick={() => setMenuOpen(false)}>Portfolio</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#FE6A61]" onClick={() => setMenuOpen(false)}>Contact</Link>
            
            {/* Mobile Order Services Button */}
            <button 
              onClick={() => {
                setIsModalOpen(true);
                setMenuOpen(false);
              }} 
              className="py-2 text-[#FE6A61] border-[#FE6A61] border hover:text-white hover:bg-[#FE6A61] rounded-lg px-6 shadow-lg text-[16px]"
            >
              Order Services
            </button>
          </nav>
        </div>
      )}

      {/* Breadcrumb Trail */}
      <div className="w-[95%] md:w-[90%] xl:w-[1200px] mx-auto py-2">
        {generateBreadcrumbs()}
      </div>

      {/* Order Services Modal */}
      <OrderServicesModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Header;
