import React from "react";
import "../styles/DigitalLearning.css";

function DigitalLearning() {
  return (
    <section className="digital-learning">
      <div className="dl-header">
        <h1>Digital Learning Ecosystem</h1>
        <p>
          MAKTABA MART envisions a connected digital ecosystem — e-books, LMS,
          and ICT-integrated resources that empower learners and educators.
        </p>
      </div>

      <div className="dl-grid">
        <div className="dl-card">
          <h3>E-Books</h3>
          <p>Accessible digital versions of our Premier Revision Series.</p>
        </div>

        <div className="dl-card">
          <h3>LMS Vision</h3>
          <p>Future-ready learning management system for schools and universities.</p>
        </div>

        <div className="dl-card">
          <h3>ICT Integration</h3>
          <p>Interactive tools and media to enhance teaching and learning.</p>
        </div>
      </div>
    </section>
  );
}

export default DigitalLearning;
