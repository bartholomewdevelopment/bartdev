import React from 'react'
import logo from "../../assets/logo.png"

export const Header = () => {
  return (
    <div className='h-[69px] bg-white shadow-xl sticky top-0 z-50'>
        <div className='w-[95%] md:w-[90%] xl:w-[1200px] mx-auto flex justify-between items-center h-[69px]'>
            <img className='w-[80px]' src={logo} alt="" />
            <div>
              <a href="mailto:joseph@bartholomewdevelopment.com"><button className='py-2 text-primary border-primary border hover:text-white hover:bg-primary rounded-lg px-6 shadow-lg text-[16px]'>Get A Quote</button></a>
            </div>
        </div>
    </div>
  )
}
