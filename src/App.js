import React, { useContext } from "react";
import { TourContext } from "./context/TourContext";
import AddTourGoalForm from "./components/AddTourGoalForm";
import DepositForm from "./components/DepositForm";
import TourList from "./components/TourList";
import OverviewPanel from "./components/OverviewPanel";
import "./styles/App.css";

function App() {
  const { tours, addTour, updateTour, deleteTour } = useContext(TourContext);

  return (
    <div className="container">
      <h1>🌙 Tour Planner</h1>
      <AddTourGoalForm onAddTour={addTour} />
      <DepositForm tours={tours} onUpdateTour={updateTour} />
      <OverviewPanel tours={tours} />
      <TourList tours={tours} onDelete={deleteTour} onUpdate={updateTour} />
    </div>
  );
}

export default App;

