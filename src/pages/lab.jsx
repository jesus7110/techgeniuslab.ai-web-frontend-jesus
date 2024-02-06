import React from 'react'
import Constacts from '../components/Contact'
import Navbar from'../components/Navbar2'
import Info from'../components/stemLab/info'
import Feature from '../components/stemLab/feature'
import Footer from '../components/Footer'
import Setup from '../components/stemLab/setupinfo'
import Imggrid from '../components/stemLab/imggrid'
import HighL from '../components/stemLab/highlight'
import Works from '../components/stemLab/work'

const Edit = () => {
  return (
    <>
      <Navbar/>
      <Info/>
      <Feature/>
      <Setup/>
      <Imggrid/>
      <HighL/>
      <Works/>
      <Footer/>
    </>
  )
}

export default Edit