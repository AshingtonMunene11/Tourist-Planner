import axios from 'axios';
const BASE = 'http://localhost:3001/tours';

export const getTours = () => axios.get(BASE);
export const addTour = (tour) => axios.post(BASE, tour);
export const updateTour = (id, data) => axios.patch(`${BASE}/${id}`, data);
export const deleteTour = (id) => axios.delete(`${BASE}/${id}`);
