import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sliderbar from 'Sliderbar';
import Navbar from './Navbar';
import  App from './Appcss';
import Clinicaldashboard from './Clinicaldashboard';
import Appointments from './Appointments';
import Paitentrecords from './Paitentrecords';
import Emr from './Emr';
import Prescriptionmanagement from './Prescriptionmanagement';


function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <div className="main-wrapper">
          <Navbar />
          <Routes>
            <Route path="/" element={<Clinicaldashboard />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/patients" element={<Paitentrecords />} />
            <Route path="/emr" element={<Emr/>} />
            <Route path="/prescriptions" element={<Prescriptionmanagement/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;