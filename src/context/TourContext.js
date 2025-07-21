import { createContext, useState, useEffect } from "react";

export const TourContext = createContext();

export const TourProvider = ({ children }) => {
	const [tours, setTours] = useState([]);

	useEffect(() => {
		fetchTours();
	}, []);

	const fetchTours = () => {
		fetch("https://json-server-1-7yyc.onrender.com/tours")
			.then((res) => res.json())
			.then(setTours)
			.catch((err) => console.error("Failed to fetch tours:", err));
	};

	const addTour = (tourData) => {
		fetch("https://json-server-1-7yyc.onrender.com/tours", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(tourData),
		})
			.then((res) => res.json())
			.then(fetchTours);
	};

	const updateTour = (id, updates) => {
		fetch(`https://json-server-1-7yyc.onrender.com/tours/${id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(updates),
		})
			.then((res) => res.json())
			.then(fetchTours);
	};

	const deleteTour = (id) => {
		fetch(`https://json-server-1-7yyc.onrender.com/tours/${id}`, {
			method: "DELETE",
		}).then(fetchTours);
	};

	return (
		<TourContext.Provider value={{ tours, addTour, updateTour, deleteTour }}>
			{children}
		</TourContext.Provider>
	);
};