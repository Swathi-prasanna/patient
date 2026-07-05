import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaCalendarAlt} from "react-icons/fa";
import {FaClock } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";

const BookAppointmentModal = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    department: "",
    doctor: "",
    date: "",
    time: "",
    appointmentType: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!show) return null;

  return (
    <div className="appointment-overlay" onClick={onClose}>
      <div className="appointment-modal" onClick={(e) => e.stopPropagation()}>
        <div className="appointment-header">
          <h2>Book New Appointment</h2>
          <button className="close-btn" onClick={onClose}>
            <IoMdClose />
          </button>
        </div>
        <div className="appointment-body">
          <div className="form-group">
            <label>Select Department *</label>
            <select name="department" value={formData.department} onChange={handleChange}>
              <option value="">Select Department</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Orthopedics</option>
              <option>Dermatology</option>
            </select>
          </div>
          <div className="form-group">
            <label>Select Doctor *</label>
            <select name="doctor" value={formData.doctor} onChange={handleChange}>
              <option value="">Select Doctor</option>
              <option>Dr. James Wilson</option>
              <option>Dr. Sarah Smith</option>
              <option>Dr. John David</option>
            </select>
          </div>
          <div className="row">
            <div className="form-group">
              <label>Preferred Date *</label>
              <input type="text" name="date"placeholder="" value={formData.date} onChange={handleChange}required/>
             </div>
            <div className="form-group">
              <label>Preferred Time *</label>
              <input type="text" name="date"placeholder="" value={formData.date} onChange={handleChange}required/>
               </div>
          </div>
          <div className="form-group">
            <label>Appointment Type *</label>
            <select name="appointmentType" value={formData.appointmentType} onChange={handleChange}>
              <option value="">Select Type</option>
              <option>Consultation</option>
              <option>Follow-up</option>
              <option>Routine Checkup</option>
            </select>
          </div>
          <div className="form-group">
            <label>Reason for Visit</label>
            <textarea rows="4" placeholder="Describe your symptoms or reason for consultation..."name="reason"
              value={formData.reason}
              onChange={handleChange}/>
          </div>
        </div>
        <div className="appointment-footer">
          <button className="confirm-btn">
             <CiCalendar size={20} color="white" />
            Confirm Booking
          </button>
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentModal;