import React from 'react'
import NavBar from '../Components/NavBar'
import HeroPage from '../Components/HeroPage';
import Collections from '../Components/Collections';
// import Footer from '../Components/Footer';

const MainPage = () => {
  return (
    <div>
      <NavBar/>
      <HeroPage/>
      <Collections/>
      {/* <Footer/> */}
    </div>
  )
}

export default MainPage
