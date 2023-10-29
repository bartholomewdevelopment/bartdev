import React from 'react'
import Banner from '../../components/Banner'
import { Services } from '../../components/Services'
import { Footer } from '../shared/Footer'
import { Toaster } from 'react-hot-toast'
import { Portfolio } from '../../components/Portfolio'

export const Home = () => {
  return (
    <div>
      <Banner/>
      <Portfolio/>
      <Services/>
      <Footer/>
      <Toaster />
    </div>
  )
}
