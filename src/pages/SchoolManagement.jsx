import React from "react";
import "../styles/Impact.css";

function SchoolManagement() {
  return (
    <section className="impact">
      <div className="impact-header">
        <h1>School Management Program</h1>
        <p>
          A complete, integrated digital solution covering every administrative and management function of a modern Kenyan school — all in one platform.
        </p>
      </div>

      <div className="impact-grid">
        <div className="impact-card">
          <h3>👨‍🎓 Student Information</h3>
          <p className="counter">Complete Profiles</p>
          <p style={{fontSize: '13px'}}>Admission records, academic history, health data, class placement tracking</p>
        </div>
        
        <div className="impact-card">
          <h3>👩‍🏫 Staff & HR</h3>
          <p className="counter">Full Management</p>
          <p style={{fontSize: '13px'}}>Teacher records, TSC details, leave management, payroll integration</p>
        </div>
        
        <div className="impact-card">
          <h3>💰 Finance</h3>
          <p className="counter">Fee Collection</p>
          <p style={{fontSize: '13px'}}>M-Pesa integration, fee tracking, receipt generation, reporting</p>
        </div>
        
        <div className="impact-card">
          <h3>📚 Academic</h3>
          <p className="counter">Curriculum</p>
          <p style={{fontSize: '13px'}}>Timetables, scheduling, curriculum tracking, lesson monitoring</p>
        </div>
        
        <div className="impact-card">
          <h3>✅ Attendance</h3>
          <p className="counter">Tracking</p>
          <p style={{fontSize: '13px'}}>Daily tracking, SMS alerts, monthly summaries, compliance reports</p>
        </div>
        
        <div className="impact-card">
          <h3>📊 Reports</h3>
          <p className="counter">Analytics</p>
          <p style={{fontSize: '13px'}}>Dashboards, MoE compliance, NEMIS integration, data exports</p>
        </div>
      </div>

      <div style={{marginTop: '40px', padding: '30px', backgroundColor: '#e8f5e9', borderRadius: '12px', textAlign: 'center'}}>
        <p style={{color: '#1A4A2E', marginBottom: '20px'}}>
          <strong>Cloud-Based & Accessible Anywhere</strong> • Web browser + mobile app • No installation needed
        </p>
        <p style={{color: '#1A4A2E'}}>
          Built for Kenyan schools with secure role-based access for principals, HODs, teachers, bursars and parents.
        </p>
      </div>
    </section>
  );
}

export default SchoolManagement;
