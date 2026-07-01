import React from "react";
import "../styles/Partners.css";

function Partners() {
  return (
    <section className="partners">
      <div className="partners-header">
        <h1>Our Partners</h1>
        <p>
          MAKTABA MART collaborates with leading institutions, publishers, and
          organizations to deliver transformative education solutions.
        </p>
      </div>

      <div className="partners-grid">
        <div className="partner-card">
          <div className="partner-logo">📚</div>
          <h3>Kenya Publishers Association</h3>
          <p>Collaborating on curriculum-aligned publishing initiatives.</p>
        </div>

        <div className="partner-card">
          <div className="partner-logo">🏫</div>
          <h3>Ministry of Education</h3>
          <p>Supporting Competency-Based Education implementation nationwide.</p>
        </div>

        <div className="partner-card">
          <div className="partner-logo">🌍</div>
          <h3>UNESCO</h3>
          <p>Partnering on global knowledge empowerment programs.</p>
        </div>

        <div className="partner-card">
          <div className="partner-logo">💻</div>
          <h3>EdTech Innovators</h3>
          <p>Driving digital learning ecosystems across Africa.</p>
        </div>
      </div>
    </section>
  );
}

export default Partners;
