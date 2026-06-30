import "./assets/PatientStyling.css";
import { Routes, Route } from "react-router-dom";
import PatientSidebar from "./assets/PatientSidebar";
import DashboardPage from "./assets/DashboardPage";
import Prescriptions from "./assets/Prescriptions";

function App() {
  return (
    <div className="app-layout">
      <PatientSidebar />

      <div className="content">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/PrescriptionPage" element={<Prescriptions />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;