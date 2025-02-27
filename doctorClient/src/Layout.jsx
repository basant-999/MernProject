import React from 'react'
import Topmenu from './component/Topmenu'
import Footer from './component/Footer'
import {Outlet} from"react-router-dom"

const Layout = () => {
  return (

    <>
    <Topmenu/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout