import React from "react";
import { SlCalender } from "react-icons/sl";
const Appointments = () => {
  return (
    <div className="appointments-container">
      <div className="appointments-header d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="appointments-title">
          My Appointments
          </h2>
          <p className="appointments-subtitle">
            View and manage your appointments
          </p>
        </div>
        <button className="btn btn-primary appointments-button">
          <SlCalender /> Book New Appointment
        </button>
          <div className="card appointment-card shadow-sm">
            <div className="card-body1">
              <div className="appointments-header d-flex justify-content-between align-items-center" >
                <div className="d-flex align-items-center">
                <div className="appointments-date-box text center">
                  <small></small>
                </div>
                </div></div>    
               </div>

      </div>
    </div>
  );
};

export default Appointments;