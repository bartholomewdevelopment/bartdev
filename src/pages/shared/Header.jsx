import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/logo.png";

export const Header = () => {
  const location = useLocation();

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

        {/* Navigation Bar */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-[#FE6A61]">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-[#FE6A61]">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-[#FE6A61]">Services</Link>
          <Link to="/portfolio" className="text-gray-700 hover:text-[#FE6A61]">Portfolio</Link>
          <Link to="/contact" className="text-gray-700 hover:text-[#FE6A61]">Contact</Link>
        </nav>

        {/* Get A Quote Button */}
        <div>
          <a href="mailto:joseph@bartholomewdevelopment.com">
            <button className="py-2 text-[#FE6A61] border-[#FE6A61] border hover:text-white hover:bg-[#FE6A61] rounded-lg px-6 shadow-lg text-[16px]">
              Get A Quote
            </button>
          </a>
        </div>
      </div>

      {/* Breadcrumb Trail */}
      <div className="w-[95%] md:w-[90%] xl:w-[1200px] mx-auto py-2">
        {generateBreadcrumbs()}
      </div>
    </div>
  );
};

export default Header;
