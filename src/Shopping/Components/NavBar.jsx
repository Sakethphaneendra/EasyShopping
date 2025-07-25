import React from 'react'


function NavBar() {
  return (
    <div>
      <div className="navBar">
        <img src="/Images/Nike_Logo.png" alt="Nike Logo" id="pageLogo" />

        <ul>
          <a href=".cardContainer"> <li >Home</li> </a>
          <li>Shop</li>
          <li>Pages</li>
          <li>About Us</li>
        </ul>

        <button id='Signup'>SignUp</button>
      </div>

    </div>
  )
}

export default NavBar
