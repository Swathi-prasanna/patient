import "./PatientStyling.css";
import { Routes, Route } from "react-router-dom";
import PatientSidebar from "./Patient/PatientSidebar";
import DashboardPage from "./Patient/DashboardPage"
import MedicalReport from "./Patient/MedicalReports";
import  Prescriptions from "./Patient/Prescriptions";
import Appointment from "./Patient/Appointment";
import LabReport from "./Patient/LabReport";
import Billpayment from "./Patient/Billpayment";
import MyDocuments from "./Patient/MyDocuments";



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