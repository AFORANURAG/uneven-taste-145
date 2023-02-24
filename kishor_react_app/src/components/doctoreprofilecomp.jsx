import React from 'react';
import '../css/DoctorCard.css';

const DoctorCard = (user) => {
    const { name, specialization, availability, qualifications, experience, rating, image } = user;

    return (
      <div className="user-card">
        <div className="user-image">
          <img src={image} alt={name} />
        </div>
        <div className="user-info">
          <h2>{name}</h2>
          <p>{specialization}</p>
          <p>Availability: {availability}</p>
          <p>Qualifications: {qualifications}</p>
          <p>Experience: {experience}</p>
          <p>Rating: {rating}</p>
        </div>
      </div>
    );
};

export default DoctorCard;
