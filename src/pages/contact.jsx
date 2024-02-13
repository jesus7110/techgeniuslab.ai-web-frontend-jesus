import React from 'react'
import Constacts from '../components/Contact'
import Navbar from'../components/Navbar2'
import Contform from'../components/ContactUs'
import Card from '../components/Contactcard'
import Footer from '../components/Footer'

const Edit = () => {
  return (
    <>
      <Navbar/>
      <Contform/>
      <Constacts/>
      <Card/>
      <Footer/>
    </>
  )
}

export default Edit