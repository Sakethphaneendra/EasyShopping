import React from 'react'


function NavBar() {
  return (
    <div>
      <div className="navBar">
        <img src="/Images/Nike_Logo.png" alt="Nike Logo" id="pageLogo" />

        <ul>
          <li >Home</li>
          <li>Shop</li>
          <li>Pages</li>
          <li>Settings</li>
        </ul>

        <button id='Signup'>SignUp</button>
      </div>

    </div>
  )
}

export default NavBar
