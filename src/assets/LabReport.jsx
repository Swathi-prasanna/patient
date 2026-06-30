import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
function LabReport() {
  return (
    <div className="lab-container">
        <h2 className="page-title">Lab Reports</h2>
        <p className="page-subtitle">View your laboratory test results</p>
        <div className="card body-card">
            <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                    <h5 className="report-title">HbA1c</h5>
                    <p className="report-text">Ordered by Dr. James Wilson - 2026-01-03 10:30</p>
                    </div>
                    <div>
                    <button className="btn btn-light me-2">
                       <MdOutlineFileDownload />Download PDF
                    </button>
                    <button className="btn btn-primary">View Results
                    </button>
                </div>
            </div>
        </div>
  </div>
  );
}

export default LabReport;
