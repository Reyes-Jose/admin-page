import './SideBarStyle.css'
import { LineStyle, Timeline, TrendingUp  } from '@mui/icons-material';

export default function SideBar() {
  return (
    <div className='sideBar'>
        <div className='sideBarContainer'>
          <h3 className='sideTitle'>Dashboard</h3>
          <ul className='sideList'>
            <li className='listItem'>
              <LineStyle/>
              Home
            </li>
            <li className='listItem'>
              <Timeline/>
              Analytics
            </li>
            <li className='listItem'>
              <TrendingUp/>
              Sales
            </li>
          </ul>
        </div>
    </div>
  )
}
