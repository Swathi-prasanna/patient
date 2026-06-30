import React from "react";
function Prescriptions() {
    return(
        <div className="container-fluid presciptions-page py-4">
            <h2 className="prescription-title">Prescriptions</h2>
            <p className="prescription-subtitle">View and manage your prescriptions</p>
            <div className="prescription-card shadow-sm">
                <div className="prescription-body">
                    <h5 className="pres-title">Active Prescriptions</h5>
                    <div className="prescription-list">
                        <div className="d-flex justify-content-between align-items-start flex-wrap">
                            <div>
                                <h5 className="medicine-name">Metformin 500mg</h5>
                                <p className="doctor-name">Prescribed by Dr. James Wilson</p>
                            </div>
                            <span className="active-badge">Active</span>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-4 col-12 mb-3">
                                <small className="details-bill">Dosage</small>
                                <p className="detail-daily">Twice daily</p>
                            </div>
                            <div className="col-md-4 col-12 mb-3">
                                <small className="details-hours">Duration</small>
                                <p className="detail-days">30 days</p>
                            </div>
                            <div className="col-md-4 col-12 mb-3">
                                <small className="detail-date">Prescribed Date</small>
                                <p className="detail-date">Dec 28, 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Prescriptions;