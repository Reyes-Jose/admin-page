import './SideBarStyle.css'
import { LineStyle, Timeline, TrendingUp  } from '@mui/icons-material';

export default function SideBar() {
  return (
    <div className='sideBar'>
        <div className='sideBarContainer'>
          <h3 className='sideTitle'>Dashboard</h3>
          <ul className='sideList'>
            <li className='listItem active'>
              <LineStyle className='iconStyle'/>
              Home
            </li>
            <li className='listItem'>
              <Timeline className='iconStyle'/>
              Analytics
            </li>
            <li className='listItem'>
              <TrendingUp className='iconStyle'/>
              Sales
            </li>
          </ul>
        </div>
    </div>
  )
}
