import React from 'react'

import Navbar from'../components/Navbar2'
import Info from '../components/Workshop/Info'
import Member from '../components/Workshop/membership'
import Footer from '../components/Footer'
import WorkshopList from '../components/Workshop/WorkshopList'
import Organise from '../components/Workshop/Organise'
import MiniWorkshop from '../components/Workshop/MiniWorkshop'
import Bootcamp from '../components/Workshop/Bootcamp'
import SummerCamp from '../components/Workshop/SummerCamp'


const Edit = () => {
  return (
    <>
      <Navbar/>
      <Info/>
      <WorkshopList/>
      <MiniWorkshop/>
      <Bootcamp/>
      <SummerCamp/>


      <Organise/>
     
      <Footer/>
    </>
  )
}

export default Edit