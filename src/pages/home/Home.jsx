import React from 'react'
import Banner from '../../components/Banner'
import { Services } from '../../components/Services'
import { Footer } from '../shared/Footer'

export const Home = () => {
  return (
    <div>
      <Banner/>
      <Services/>
      <Footer/>
    </div>
  )
}
