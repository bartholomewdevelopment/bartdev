import React from 'react'
import {FaFacebookF} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
import {BiLogoLinkedin} from "react-icons/bi"
import {BsFillTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {MdLocationPin} from "react-icons/md"

export const Footer = () => {
  return (
    <div data-aos="fade-up" >
        <div className='min-h-[200px] bg-madBlack text-white flex justify-between items-center py-5 mt-6'>
            <div className='w-[90%] xl:w-[1200px] mx-auto flex flex-col justify-center items-center'>
                {/* social icons */}
                <div className='flex'>
                    <a className='w-[45px] h-[45px] bg-white rounded-full flex justify-center items-center mx-3' target='_blank' href="https://www.facebook.com/profile.php?id=100092204199645">
                        <FaFacebookF className='text-primary text-2xl'/>
                    </a>
                    <a className='w-[45px] h-[45px] bg-white rounded-full flex justify-center items-center mx-3' target='_blank' href="">
                        <AiOutlineTwitter className='text-primary text-2xl'/>
                    </a>
                    <a className='w-[45px] h-[45px] bg-white rounded-full flex justify-center items-center mx-3' target='_blank' href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fartifconnect%2F%3Ffbclid%3DIwAR0AhfiOi_rdWoCkFg1xPvZkl0k7z0xROysqoTX9RPGlFyxlIlOn8BrxukI&h=AT3Wp0WJt6tsLWLiG9k4i0Zboy4Zg7-m4YHlW4hcjwFeOYw98g2NuB-uH4PHiJFqQLsA-I6BwLqy3D9tt0EgdqqcoOtoYrYLBSZIgre-JyBPlTg3H1ZsGBDR-aWpAKp_IoLdTA">
                        <BiLogoLinkedin className='text-primary text-2xl'/>
                    </a>
                </div>
                {/* location */}
                <div className='mt-5 flex flex-col items-center pt-3'>
                    <p className='flex items-center'><BsFillTelephoneFill className='mr-2 text-primary'/> <span>801-380-6649</span></p>
                    <p className='flex items-center'><MdEmail className='mr-2 text-primary'/> <a href='mailto:joseph@bartholomewdevelopment.com'>joseph@bartholomewdevelopment.com</a></p>
                </div>
            </div>
        </div>
        {/* mini footer */}
        <div className='py-3 text-center'>
            <p className='px-2'>© 2023 BARTHOLOMEW DEVELOPMENT All Rights Reserved. Designed & Developed By Bartholomew Development LLC</p>
        </div>
    </div>
  )
}
