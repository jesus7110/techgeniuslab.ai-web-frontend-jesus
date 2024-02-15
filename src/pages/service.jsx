import React from 'react'

import Navbar from'../components/Navbar2'
import Info from '../components/Sevice/servicemain'
import Wedo from '../components/Sevice/whatwedo'
import Footer from '../components/Footer'
import Wchooseus from '../components/Sevice/whychooseus'
import Howitworks from '../components/Sevice/howitworks'


const Edit = () => {
  return (
    <>
      <Navbar/>
      <Info/>
      <Wedo/>
      <Howitworks/>
      <Wchooseus/>
      <Footer/>
    </>
  )
}

export default Edit