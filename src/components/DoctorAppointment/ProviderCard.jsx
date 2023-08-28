import React from "react";
import "../../styles/Health.css";

function ProviderCard({ name, specialty, gender, availability, imageUrl }) {
  return (
    <div className="provider-card">
      <img className="profile-image" src={imageUrl} alt={`${name}'s profile`} />
      <h3>{name}</h3>
      <p>
        <strong>Specialty:</strong> {specialty}
      </p>
      <p>
        <strong>Gender:</strong> {gender}
      </p>
      <p>
        <strong>Availability:</strong> {availability.join(", ")}
      </p>
      <button className="schedule-button">Schedule Appointment</button>
    </div>
  );
}

export default ProviderCard;
