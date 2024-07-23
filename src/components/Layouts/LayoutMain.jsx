import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './ui/Hero/NavBar/Navbar'

export const LayoutMain = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
