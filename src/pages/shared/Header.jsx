import React from 'react'
import logo from "../../assets/logo.png"

export const Header = () => {
  return (
    <div className='h-[90px] bg-white shadow-xl sticky top-0 z-50'>
        <div className='w-[95%] md:w-[90%] xl:w-[1200px] mx-auto flex justify-between items-center h-[90px]'>
            <img className='w-[180px] md:w-[200px] xl:w-[220px]' src={logo} alt="Logo" />
            <div>
              <a href="mailto:joseph@bartholomewdevelopment.com">
                <button className='py-2 text-[#FE6A61] border-[#FE6A61] border hover:text-white hover:bg-[#FE6A61] rounded-lg px-6 shadow-lg text-[16px]'>
                  Get A Quote
                </button>
              </a>
            </div>
        </div>
    </div>
  )
}

export default Header;