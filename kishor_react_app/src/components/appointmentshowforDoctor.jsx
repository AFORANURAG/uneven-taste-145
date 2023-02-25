import React from 'react';
import '../css/AppointmentCard.css';

const AppointmentCard = (appointment) => {
    const { dateTime, patientName, note } = appointment;

    return (
        <div className="appointment-card">
            <div className="appointment-header">
                <h2>Appointment </h2>
                <p>{dateTime}</p>
            </div>
            <div className="appointment-details">
                <p>Patient: {patientName}</p>
                <p>Note: {note}</p>
            </div>
        </div>

    );
}

export default AppointmentCard;
