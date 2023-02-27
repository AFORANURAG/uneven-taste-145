// date picker bnao bhai
//
import React, { useState,useContext } from "react";
import { Appointmentcontext } from "../../contexts/Appointment.context";


function CustomDatePicker() {

const {selectedDate,setSelectedDate}=useContext(Appointmentcontext)
const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const dayOfWeek = selectedDate.getDay();
    if (dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 5) {
      setSelectedDate(selectedDate);
    } else {
      setSelectedDate(null);
    }
  };
  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    const selectedDateTime = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      selectedTime.split(":")[0],
      selectedTime.split(":")[1]
    );
    if (selectedDateTime <= new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 15, 0)) {
      setSelectedDate(selectedDateTime);
    }
  };

  return (
    <div>
      <label htmlFor="datepicker">Select a date:</label>
      <input type="date" id="datepicker" onChange={handleDateChange} />
      <label htmlFor="timepicker">Select a time:</label>
      <input type="time" id="timepicker" max="15:00" onChange={handleTimeChange} disabled={!selectedDate} />
      {!selectedDate && <p>Please select a date that falls on Monday, Wednesday or Friday.</p>}
    </div>
  );
}

export default CustomDatePicker;
