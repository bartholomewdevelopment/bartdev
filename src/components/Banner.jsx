import emailjs from "@emailjs/browser"
import { Result } from "postcss"
import React from 'react'
import toast from "react-hot-toast"

const Banner = () => {

    const handleSendMessage=(e)=>{
        e.preventDefault()
        emailjs.sendForm("service_3zbggaq","template_kap1494",e.target,"0-W8xw21Q1_C79BP1")
        .then(result=>{
            if(result.text==="OK"){
                toast.success("Successfully email send to Bartholomew Development LLC")
                e.target.reset()
            }
        },(error)=>{
            console.log(error.text)
        })
        
    }
  return (
    <div className='banner min-h-[90vh] flex items-center overflow-hidden'>
        <div className='md:w-[90%] xl:w-[1200px] mx-auto md:flex justify-between'>
            <div data-aos="fade-right" data-aos-duration="3000" className='w-[90%] md:w-[50%] mx-auto text-white my-10 md:m-0'>
                <h4>Software Development</h4>
                <h1 className='text-[40px] md:text-[64px] font-bold'>Bartholomew Development presents Overtime Athletic Management.</h1>
                <p>Say Goodbye to Fragmented Athletic Management. Try our beta and experience a unified platform that streamlines registration, scheduling, and more. Designed for Athletic Directors, by those who understand the game.</p>
                <a href="mailto:joseph@bartholomewdevelopment.com"><button className='py-3 mt-6 bg-white text-primary rounded-lg px-6 shadow-lg text-[20px]'>Get A Quote</button></a>
            </div>
            <div data-aos="fade-left" data-aos-duration="3000" className='md:w-[50%] flex justify-center my-10 md:m-0'>
                <div className='w-[90%] md:w-[60%] bg-white p-5 rounded-2xl'>
                    <h1 className='text-2xl font-bold'>Sign up for Discounted Beta Testing</h1>
                    <p className='text-gray text-sm'>Elevate your athletic department's performance and streamline operations with Overtime Athletic Management. Sign up for our beta test today and secure a special discounted rate!</p>
                    <form onSubmit={handleSendMessage}>
                        <input required name='name' className='w-full my-4 py-2 border border-gray/40 px-3' type="text" placeholder='Full Name' />
                        <input required name='email' className='w-full my-4 py-2 border border-gray/40 px-3' type="email" placeholder='Email' />
                        <input required name='phone' className='w-full my-4 py-2 border border-gray/40 px-3' type="number" placeholder='Phone' />
                        <input required name='message' className='w-full my-4 py-2 border border-gray/40 px-3' type="text" placeholder='Comments or Questions?' />
                        <button type='submit' className='py-2 bg-primary text-white border-primary border hover:text-primary hover:bg-white rounded-sm px-6 shadow-lg text-[16px]'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner