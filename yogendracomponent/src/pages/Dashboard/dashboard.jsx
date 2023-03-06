import React, { useState } from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import {useNavigate} from "react-router-dom"
import "../styles.css";
import {CalendarIcon,} from '@chakra-ui/icons'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Dashboard = () => {
const navigate=useNavigate();
const [Appointments,setappintments] = useState(()=>{
  let appointments = JSON.parse(localStorage.getItem("orders"))
  if(appointments){
    return appointments
  }
  return []
})
console.log(Appointments,"in the dashboard of circular progression")

 function sendToDepartments(){
  console.log("working fine")
  navigate("/departments")
}


  const percentage = 66;
  return (
    <div class="dashboard-content">
        <DashboardHeader onClick={sendToDepartments} btnText="Book Appointment"/>
       <div className='dash-data'>
          <div className='data-card'>
            <h3>Total AppointMents</h3>
            <div style={{ width: 100, height: 100 }} className="circle">
            <CircularProgressbar value={100} text={`${100}%`} />
            </div>
            <CalendarIcon/>
            <h3>{Appointments.length}</h3>
          </div>
          <div className='data-card'>
            <h3>Total Solved</h3>
            
            <div style={{ width: 100, height: 100 }} className="circle">
            <CircularProgressbar value={100} text={`${100}%`} />
            </div>
            <CalendarIcon/>
            <h3>{Appointments.length}</h3>
          </div>
          <div className='data-card'>
            <h3>Total Pending</h3>
            <div style={{ width: 100, height: 100 }} className="circle">
            <CircularProgressbar value={0} text={`${0}%`} />
            </div>
            <CalendarIcon/>
            <h3>0</h3>
          </div>
          <div className='data-card'>
            <h3>Total Canceled</h3>
            
            <div style={{ width: 100, height: 100, }} className="circle">
            <CircularProgressbar value={0} text={`${0}%`} 
            styles={buildStyles({
              textSize: '20px',
              pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
            />
            </div>
            <CalendarIcon/>
            <h3>0</h3>
          </div>
       </div>
    </div>
  )
}

export default Dashboard