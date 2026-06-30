import "./assets/PatientStyling.css";
import { Routes, Route } from "react-router-dom";
import PatientSidebar from "./assets/PatientSidebar";
import DashboardPage from "./assets/DashboardPage";
import Prescriptions from "./assets/Prescriptions";
import MedicalReport from "./assets/MedicalReports";
import Dispensingpage from "./assets/Prescriptions";
import Appointment from "./assets/Appointment";
function App() {
  return (
    <div className="app-layout">
      <PatientSidebar />

      <div className="content">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/PrescriptionPage" element={<Appointment />} />
          <Route path="/Inventorypage" element={<MedicalReport />}  />
          <Route path="/DispensingPa" element={<Prescriptions />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;