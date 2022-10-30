import React from 'react'
import './navbar.css'

const Navbar = () => {
  const logo = "https://upload.wikimedia.org/wikipedia/commons/4/40/NCR_logo_without_background.png";
  return (
    <div className='nav'>
      <div className='nav-logo'>
        <img src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default Navbar