import React from 'react'
import './NavBarStyle.css'
import { NotificationsOutlined } from '@mui/icons-material';



export default function NavBar() {
  return (
    <div className='navBar'>
        <div className='navbarContainer'>
        <div className='navBarLeft'>
            <div className='adminLogo'>Admin</div>
        </div>
        <div className='navBarRight'>Right</div>
        <div className='iconContainter'>
        <NotificationsOutlined/>
        </div>
        </div>
    </div>
  )
}
