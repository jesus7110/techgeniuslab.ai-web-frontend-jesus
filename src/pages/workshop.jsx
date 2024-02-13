import React from 'react'

import Navbar from'../components/Navbar2'
import Info from '../components/Workshop/Main'
import Member from '../components/Workshop/membership'
import Footer from '../components/Footer'
import Types from '../components/Workshop/Types'


const Edit = () => {
  return (
    <>
      <Navbar/>
      <Info/>
      <Types/>
      <Member/>
     
      <Footer/>
    </>
  )
}

export default Edit