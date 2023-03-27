import React, { useState, useEffect } from 'react';
import AppointmentCard from './appointmentshowforDoctor';
import { backendurl } from './backendurl';
// import '../css/AppointmentCard.css';
function Allapointment(props) {
  const { id, token } = props;
  const [Data, setData] = useState([]);
// console.log(D)
  const getData = async () => {
    try {
      const res = await fetch(`${backendurl}/Appointment/doctor/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const newActualData = await res.json();
      setData(newActualData);
      console.log(newActualData)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, [id, token]);

  return (
    <div className='container-div'>
     <h1 className='main-heading'>Upcoming Appointment</h1>
     <div className='appointment-container'>
     {Data?.map((el) => (<AppointmentCard dateTime={el.dateTime} patientName={el.patientName} note={el.note} id={el.AppointmentId} />))}
   </div>
     
     </div>
     );
}

export default Allapointment;

