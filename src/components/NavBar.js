import React from 'react'
import './NavBarStyle.css'

export default function NavBar() {
  return (
    <div className='navBar'>
        <div className='navbarContainer'>
        <div className='navBarLeft'>
            <div className='adminLogo'>Admin</div>
        </div>
        <div className='navBarRight'>Right</div>
        </div>
    </div>
  )
}
