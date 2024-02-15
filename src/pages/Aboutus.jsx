import React from 'react'

import Navbar from'../components/Navbar2'
//import Developer from'../components/About us/Developer'
import Main from '../components/About us/Main'
import Footer from '../components/Footer'
import Vision from '../components/About us/vision'
import WhyChooseUs from '../components/About us/whychooseus'
import JoinUs from '../components/About us/joinus'
import NewWay from '../components/About us/newWay'


const Edit = () => {
  return (
    <>
      <Navbar/>
      <Main/>
      <Vision/>
      <WhyChooseUs/>
      
      <JoinUs/>
      <Footer/>
    </>
  )
}

export default Edit