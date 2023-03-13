import React from 'react'
import './NavBarStyle.css'
import { NotificationsNoneIcon } from '@mui/icons-material';
//check icon error


export default function NavBar() {
  return (
    <div className='navBar'>
        <div className='navbarContainer'>
        <div className='navBarLeft'>
            <div className='adminLogo'>Admin</div>
        </div>
        <div className='navBarRight'>Right</div>
        <div className='iconContainter'>
        <NotificationsNoneIcon/>
        </div>
        </div>
    </div>
  )
}
