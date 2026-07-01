import React from "react";
import "../styles/Careers.css";

function Careers() {
  return (
    <section className="careers">
      <div className="careers-header">
        <h1>Careers at MAKTABA MART</h1>
        <p>
          Join our mission to transform education across Africa. Explore open
          positions and apply to be part of our growing team.
        </p>
      </div>

      <div className="jobs-grid">
        <div className="job-card">
          <h3>Publishing Assistant</h3>
          <p>Nairobi · Full-time</p>
          <p>
            Support editorial and publishing workflows, ensuring quality
            educational content delivery.
          </p>
          <a href="#">Apply Now</a>
        </div>

        <div className="job-card">
          <h3>Curriculum Specialist</h3>
          <p>Remote · Contract</p>
          <p>
            Collaborate with educators to align resources with Competency-Based
            Education standards.
          </p>
          <a href="#">Apply Now</a>
        </div>

        <div className="job-card">
          <h3>Digital Learning Developer</h3>
          <p>Nairobi · Full-time</p>
          <p>
            Build and maintain e-learning modules, integrating modern digital
            tools for classrooms.
          </p>
          <a href="#">Apply Now</a>
        </div>
      </div>

      <form className="application-form">
        <h2>Submit Your Application</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Position Applied For" required />
        <textarea placeholder="Cover Letter" rows="5" required></textarea>
        <button type="submit">Send Application</button>
      </form>
    </section>
  );
}

export default Careers;
