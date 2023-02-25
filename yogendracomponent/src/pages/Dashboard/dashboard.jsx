import React from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import "../styles.css";
import {CalendarIcon,} from '@chakra-ui/icons'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Dashboard = () => {
  const percentage = 66;
  return (
    <div class="dashboard-content">
        <DashboardHeader btnText="Book Appointment"/>
       <div className='dash-data'>
          <div className='data-card'>
            <h3>Total AppointMents</h3>
            <div style={{ width: 100, height: 100 }} className="circle">
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>
            <CalendarIcon/>
            <h3>45</h3>
          </div>
          <div className='data-card'>
            <h3>Total Solved</h3>
            
            <div style={{ width: 100, height: 100 }} className="circle">
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>
            <CalendarIcon/>
            <h3>45</h3>
          </div>
          <div className='data-card'>
            <h3>Total Pending</h3>
          
            <div style={{ width: 100, height: 100 }} className="circle">
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>
            <CalendarIcon/>
            <h3>45</h3>
          </div>
          <div className='data-card'>
            <h3>Total Canceled</h3>
            
            <div style={{ width: 100, height: 100, }} className="circle">
            <CircularProgressbar value={percentage} text={`${percentage}%`} 
            styles={buildStyles({
              textSize: '20px',
              pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
            />
            </div>
            <CalendarIcon/>
            <h3>45</h3>
          </div>
       </div>
    </div>
  )
}

export default Dashboard