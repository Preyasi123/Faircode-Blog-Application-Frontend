import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Register from '../Components/Register'
import IntroPost from '../Components/IntroPost'



function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>  
      <Register></Register>
      <IntroPost></IntroPost>
    </div>
  )
}

export default Home
