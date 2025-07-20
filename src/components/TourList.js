import React from "react";
import TourCard from "./TourCard";

function TourList({ tours, onDelete, onUpdate }) {
  return (
    <div className="goal-list">
      <h2>📍 Upcoming Tours</h2>
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  );
}

export default TourList;
