import React from 'react'

const Banner = () => {
  return (
    <div className='banner min-h-[90vh] flex items-center overflow-hidden'>
        <div className='md:w-[90%] xl:w-[1200px] mx-auto md:flex justify-between'>
            <div data-aos="fade-right" data-aos-duration="3000" className='w-[90%] md:w-[50%] mx-auto text-white my-10 md:m-0'>
                <h4>Software Development</h4>
                <h1 className='text-[40px] md:text-[64px] font-bold'>Bartholomew Development presents Overtime Athletic Management.</h1>
                <p>Become a Tester with "Sign up for Discounted Beta Testing".</p>
                <a href="mailto:joseph@bartholomewdevelopment.com"><button className='py-3 mt-6 bg-white text-primary rounded-lg px-6 shadow-lg text-[20px]'>Get A Quote</button></a>
            </div>
            <div data-aos="fade-left" data-aos-duration="3000" className='md:w-[50%] flex justify-center my-10 md:m-0'>
                <form className='w-[90%] md:w-[60%] bg-white p-5 rounded-2xl'>
                    <h1 className='text-2xl font-bold'>Sign up for Discounted Beta Testing</h1>
                    <p className='text-gray'>Let us know about your plan and strategy and, get a free quote.</p>
                    <div>
                        <input className='w-full my-4 py-2 border border-gray/40 px-3' type="text" placeholder='Full Name' />
                        <input className='w-full my-4 py-2 border border-gray/40 px-3' type="text" placeholder='Email' />
                        <input className='w-full my-4 py-2 border border-gray/40 px-3' type="number" placeholder='Phone' />
                        <input className='w-full my-4 py-2 border border-gray/40 px-3' type="text" placeholder='Comments or Questions?' />
                        <button className='py-2 bg-primary text-white border-primary border hover:text-primary hover:bg-white rounded-sm px-6 shadow-lg text-[16px]'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Banner