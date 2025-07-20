import React, { useState } from "react";

function AddTourGoalForm({ onAddTour }) {
  const [form, setForm] = useState({
    name: "",
    targetAmount: "",
    category: "",
    deadline: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTour = {
      ...form,
      savedAmount: 0,
      createdAt: new Date().toISOString().split("T")[0],
    };

    fetch("http://localhost:3000/tours", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTour),
    })
      .then((res) => res.json())
      .then(onAddTour);

    setForm({ name: "", targetAmount: "", category: "", deadline: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>🗺️ Plan a New Tour</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Tour Name" required />
      <input name="targetAmount" value={form.targetAmount} onChange={handleChange} type="number" placeholder="Budget Target (KES)" required />
      <input name="category" value={form.category} onChange={handleChange} placeholder="Category (Safari, City, etc)" required />
      <input name="deadline" value={form.deadline} onChange={handleChange} type="date" required />
      <button type="submit">Create Goal</button>
    </form>
  );
}

export default AddTourGoalForm;
