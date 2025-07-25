import React from 'react'
import HeroPage from './HeroPage'


function NavBar() {
  return (
    <div>
      <div className="navBar">
        <img src="/Images/Nike_Logo.png" alt="Nike Logo" id="pageLogo" />

        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Pages</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>

        <button id='Signup'>SignUp</button>
      </div>

      <HeroPage/>
    </div>
  )
}

export default NavBar
