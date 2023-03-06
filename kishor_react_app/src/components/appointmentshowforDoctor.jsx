import React from 'react';
import '../css/AppointmentCard.css';
import DeleteButton from './DeleteButtone';
import { backendurl } from './backendurl';

const AppointmentCard = (appointment) => {
    const { dateTime, patientName, note,id } = appointment;

    function handleDelete() {
        // Implement the deletion of the appointment here
        const appointmentId = appointment.id; // Get the ID of the appointment to delete
        const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYW5la2lzaG9yMDYxMkBnbWFpbC5jb20iLCJyb2xlIjoicGF0aWVudCIsImlhdCI6MTY3NzQyMjA1MSwiZXhwIjoxNjc3NTA4NDUxfQ.c4ErvD0cI7UIbI3_78uRTz58pyVlHrREHTM-bFb3S9A'; // Replace this with your actual bearer token
    
        fetch(`${backendurl}/appointment/${appointmentId}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Failed to delete appointment');
            }
            console.log('Appointment deleted!');
            window.location.reload();
            // Implement any additional logic after successful deletion here
          })
          .catch((error) => {
            console.error(error);
          });
        // console.log('Appointment deleted!');
      }
    return (
        <div className="appointment-card">
            <div className="appointment-header">
                <h2>Appointment </h2>
                <p>{dateTime}</p>
            </div>
            <div className="appointment-details">
                <p>Patient: {patientName}</p>
                <p>Note: {note}</p>
                <DeleteButton onClick={handleDelete}/>
            </div>
        </div>

    );
}

export default AppointmentCard;

