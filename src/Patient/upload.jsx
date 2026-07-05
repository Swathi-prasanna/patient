import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiFileOn, CiCalendar } from "react-icons/ci";

const Upload= ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    category: "",
    file: null,
    fileName: "",
    notes: "",
  });
  const [isDragging, setIsDragging] = useState(false);

  if (!show) return null;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        file,
        fileName: file.name,
      }));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        file,
        fileName: file.name,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploading document:", formData);
    onClose();
    setFormData({
      category: "",
      file: null,
      fileName: "",
      notes: "",
    });
  };

  return (
    <div className="upload-modal-overlay" onClick={onClose}>
      <div className="upload-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="upload-modal-header">
          <h3 className="upload-modal-title">Upload Medical Document</h3>
          <button className="upload-close-btn" onClick={onClose}>
            <IoMdClose size={24} />
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Upload;
