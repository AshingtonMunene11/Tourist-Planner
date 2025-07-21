import React, { useState } from "react";

function DepositForm({ tours, onUpdateTour }) {
	const [form, setForm] = useState({ tourId: "", amount: "" });

	const handleSubmit = (e) => {
		e.preventDefault();

		const tour = tours.find((t) => t.id === form.tourId);
		if (!tour) return;

		const original = Number(tour.savedAmount) || 0;
		const deposit = Number(form.amount);

		const newAmount = original + deposit;
//const Base-Url=""
//https://json-server-1-7yyc.onrender.com/
		fetch(`https://json-server-1-7yyc.onrender.com/tours/${tour.id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ savedAmount: newAmount }),
		})
			.then((res) => {
				if (!res.ok) throw new Error("Network response was not ok");
				return res.json();
			})
			.then((updatedTour) => {
				onUpdateTour(updatedTour.id, { savedAmount: updatedTour.savedAmount });
			})
			.catch((err) => {
				console.error("Failed to update tour:", err);
			});

		setForm({ tourId: "", amount: "" });
	};


	return (
		<form onSubmit={handleSubmit}>
			<h2>💰 Save Towards a Tour</h2>
			<select
				value={form.tourId}
				onChange={(e) => setForm((f) => ({ ...f, tourId: e.target.value }))}
				required
			>
				<option value="">Select Tour</option>
				{tours.map((tour) => (
					<option key={tour.id} value={tour.id}>
						{tour.name}
					</option>
				))}
			</select>
			<input
				type="number"
				placeholder="Deposit Amount"
				value={form.amount}
				onChange={(e) => setForm((f) => ({ ...f, amount: e.target.value }))}
				required
			/>
			<button type="submit">Deposit</button>
		</form>
	);
}

export default DepositForm;