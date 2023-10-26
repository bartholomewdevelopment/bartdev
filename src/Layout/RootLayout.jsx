import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../pages/shared/Header'

export const RootLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}
