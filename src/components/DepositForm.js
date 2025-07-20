import React, { useState } from "react";

function DepositForm({ tours, onUpdateTour }) {
  const [form, setForm] = useState({ tourId: "", amount: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const tour = tours.find((t) => t.id === Number(form.tourId));
    if (!tour) return;

    const newAmount = Number(tour.savedAmount) + Number(form.amount);

    fetch(`http://localhost:3000/tours/${tour.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ savedAmount: newAmount }),
    })
      .then((res) => res.json())
      .then(onUpdateTour);

    setForm({ tourId: "", amount: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>💰 Save Towards a Tour</h2>
      <select value={form.tourId} onChange={(e) => setForm({ ...form, tourId: e.target.value })}>
        <option value="">Select Tour</option>
        {tours.map((tour) => (
          <option key={tour.id} value={tour.id}>{tour.name}</option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Deposit Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        required
      />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;
