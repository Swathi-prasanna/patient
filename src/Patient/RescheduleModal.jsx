import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiCalendar, CiClock2 } from "react-icons/ci";

function RescheduleModal({ show, onClose, currentAppointment }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    reason: ""
  });

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Rescheduled appointment:", formData);
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

  return (
    <div className="re-modal-overlay" onClick={onClose}>
      <div className="re-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="re-modal-header">
          <h3 className="re-modal-title">Reschedule Appointment</h3>
          <button className="re-close-btn" onClick={onClose}>
            <IoMdClose size={24} />
          </button>
        </div>
        
        <div className="re-current-appointment">
          <h4 className="re-current-title">Current Appointment</h4>
          <div className="re-current-details">
            <p className="re-current-doctor">
              {currentAppointment.doctor} - {currentAppointment.department}
            </p>
            <p className="re-current-date-time">
              {currentAppointment.date} at {currentAppointment.time}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="re-modal-body">
          <div className="re-form-row">
            <div className="re-form-group">
              <label className="re-form-label">New Date *</label>
              <div className="re-input-icon">
                <CiCalendar size={18} color="#45556C" />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="re-form-input"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
            </div>

            <div className="re-form-group">
              <label className="re-form-label">New Time *</label>
              <div className="re-input-icon">
                <CiClock2 size={18} color="#45556C" />
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="re-form-select"
                  required
                >
                  <option value="">Select time</option>
                  {timeSlots.map((slot, idx) => (
                    <option key={idx} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="re-form-group">
            <label className="re-form-label">Reason for Rescheduling</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="re-form-textarea"
              placeholder="Optional - let us know why you're rescheduling"
              rows={3}
            />
          </div>

          <div className="re-modal-footer">
            <button type="button" className="re-cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="re-confirm-btn">
              Confirm Reschedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RescheduleModal;
