import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiCalendar} from "react-icons/ci";
import {CiClock2} from "react-icons/ci";

function Booknew({ show, onClose }) {
  const [formData, setFormData] = useState({
    department: "",
    doctor: "",
    date: "",
    time: "",
    appointmentType: "",
    reason: ""
  });

  if (!show) return null;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment booked:", formData);
    onClose();
  };

  const timeSlots = [
    "09:00 AM", 
    "09:30 AM", 
    "10:00 AM",
    "10:30 AM", 
    "11:00 AM", 
    "11:30 AM",
    "02:00 PM", 
    "02:30 PM", 
    "03:00 PM", 
    "03:30 PM", 
    "04:00 PM", 
    "04:30 PM"
  ];

  const doctors = {
    "General Medicine": ["Dr. James Wilson", "Dr. Sarah Miller", "Dr. Michael Chen"],
    "Cardiology": ["Dr. Emily Brown", "Dr. Robert Johnson"],
    "Dermatology": ["Dr. Lisa Park", "Dr. David Kim"],
    "Neurology": ["Dr. Amanda Williams", "Dr. Thomas Lee"]
  };

  const availableDoctors = doctors[formData.department] || [];

  return (
    <div className="test-modal-overlay" onClick={onClose}>
      <div className="test-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="test-modal-header">
          <h3 className="test-modal-title">Book New Appointment</h3>
          <button className="test-close-btn" onClick={onClose}>
            <IoMdClose size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="test-modal-body">
          <div className="test-form-group">
            <label className="test-form-label">Select Department *</label>
            <select name="department" value={formData.department} onChange={handleChange} className="test-form-select"
              required>
              <option value="">Choose a department</option>
              <option value="General Medicine">General Medicine</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Neurology">Neurology</option>
            </select>
          </div>
          <div className="test-form-group">
            <label className="test-form-label">Select Doctor *</label>
            <select name="doctor" value={formData.doctor} onChange={handleChange} className="test-form-select"
              required disabled={!formData.department}>
              <option value="">Choose a doctor</option>
              {availableDoctors.map((doc, idx) => (<option key={idx} value={doc}>{doc}</option>))}
            </select>
          </div>
          <div className="test-form-row">
            <div className="test-form-group">
              <label className="test-form-label">Preferred Date *</label>
              <div className="test-input-icon">
                <CiCalendar size={18} color="#45556C" />
                <input type="date" name="date" value={formData.date}  onChange={handleChange} className="test-form-input"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
            </div>
            <div className="test-form-group">
              <label className="test-form-label">Preferred Time *</label>
              <div className="test-input-icon">
                <CiClock2 size={18} color="#45556C" />
                <select
                  name="time" value={formData.time} onChange={handleChange} className="test-form-select"
                  required disabled={!formData.date}>
                  <option value="">Select time</option>
                  {timeSlots.map((slot, idx) => (<option key={idx} value={slot}>{slot}</option>))}
                </select>
              </div>
            </div>
        </div>
        <div className="test-form-group">
            <label className="test-form-label">Appointment Type *</label>
            <div className="test-radio-group">
              <label className="test-radio-label">
                <input type="radio" name="appointmentType" value="In-Person" checked={formData.appointmentType === "In-Person"} onChange={handleChange} className="test-radio-input"
                  required/>
                <span className="test-radio-text">In-Person Visit</span>
              </label>
              <label className="test-radio-label">
                <input type="radio" name="appointmentType" value="Virtual" checked={formData.appointmentType === "Virtual"}
                  onChange={handleChange} className="test-radio-input" />
                <span className="test-radio-text">Virtual Consultation</span>
              </label>
            </div>
          </div>
          <div className="test-form-group">
            <label className="test-form-label">Reason for Visit</label>
            <textarea name="reason" value={formData.reason} onChange={handleChange} className="test-form-textarea"
              placeholder="Describe your symptoms or reason for consultation..."
              rows={4}/>
          </div>
          <div className="test-modal-footer">
            <button type="button" className="test-cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="test-confirm-btn">
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Booknew;
