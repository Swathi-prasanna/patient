import "./assets/PatientStyling.css";
import { Routes, Route } from "react-router-dom";
import PatientSidebar from "./assets/PatientSidebar";
import DashboardPage from "./assets/DashboardPage";
import Prescriptions from "./assets/Prescriptions";
import MedicalReport from "./assets/MedicalReports";
import Dispensingpage from "./assets/Prescriptions";
import Appointment from "./assets/Appointment";
import LabReport from "./assets/LabReport";
import Billpayment from "./assets/Billpayment";
import MyDocuments from "./assets/MyDocuments";

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
          <Route path="/DispensingPge" element={<LabReport />} />
          <Route path="/upload" element={<MyDocuments />} />
          <Route path="/DispensigPage" element={<Billpayment />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;