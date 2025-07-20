import React from "react";

function OverviewPanel({ tours }) {
  const totalTours = tours.length;
  const totalSaved = tours.reduce((acc, t) => acc + Number(t.savedAmount), 0);
  const completed = tours.filter((t) => t.savedAmount >= t.targetAmount).length;

  return (
    <div className="overview">
      <h2>📈 Tour Overview</h2>
      <p>Total Planned Tours: {totalTours}</p>
      <p>Total Saved: KES {totalSaved}</p>
      <p>Fully Funded Tours: {completed}</p>
    </div>
  );
}

export default OverviewPanel;
