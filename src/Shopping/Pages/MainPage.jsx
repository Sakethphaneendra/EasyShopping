import React from 'react'
import NavBar from '../Components/NavBar'
import HeroPage from '../Components/HeroPage';
import Collections from '../Components/Collections';
import Footer from '../Components/Footer';
import { useState } from 'react';
import { Bags } from '../data';
const MainPage = () => {

  const [bagsData,setBags] = useState(Bags)

  return (

    <div>
      
      <NavBar/>
      <HeroPage/>
      <Collections bagsData = {bagsData}/>
      <Footer/>
    </div>
  )
}

export default MainPage
