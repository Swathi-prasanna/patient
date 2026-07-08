import React from 'react'
import PatientSidebar from './PatientSidebar'
import PatientNavbar from './PatientNavbar'
import Dashboard from './Dashboard'

const DashboardPage = () => {
  return (
    <div className="app-layout">
      <PatientSidebar />
      <div className="content">
        <PatientNavbar />
        <Dashboard/>

      </div>
    </div>
  )
}

export default DashboardPage