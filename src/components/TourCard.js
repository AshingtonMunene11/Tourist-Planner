import React from "react";

function TourCard({ tour, onDelete }) {
  const { id, name, category, deadline, targetAmount, savedAmount } = tour;
  const progress = Math.min((savedAmount / targetAmount) * 100, 100).toFixed(0);
  const daysLeft = Math.ceil((new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24));
  const isReady = savedAmount >= targetAmount;
  const isSoon = daysLeft <= 30 && daysLeft >= 0 && !isReady;
  const isOverdue = daysLeft < 0 && !isReady;

  return (
    <div className="goal-card">
      <h3>{name}</h3>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Deadline:</strong> {deadline} ({daysLeft} days left)</p>
      <p><strong>Saved:</strong> KES {savedAmount} / {targetAmount}</p>
      <div className="progress-bar">
        <div className="filled" style={{ width: `${progress}%` }}></div>
      </div>
      {isReady && <p className="success">✅ Fully Funded!</p>}
      {isSoon && <p className="warning">⚠️ Deadline Approaching!</p>}
      {isOverdue && <p className="danger">❌ Goal Overdue</p>}
      <button onClick={() => onDelete(id)}>🗑 Delete</button>
    </div>
  );
}

export default TourCard;
