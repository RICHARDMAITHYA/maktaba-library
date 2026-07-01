import React from "react";
import "../styles/Resources.css";

function Assessments() {
  return (
    <section className="resources">
      <div className="resources-header">
        <h1>Examinations & Assessments — Grade 10</h1>
        <p>
          Rigorous, exam-standard assessment materials that prepare learners thoroughly for KCSE and beyond — structured around the CBE assessment framework.
        </p>
      </div>

      <div className="resources-grid">
        <div className="resource-card">
          <h3>🏫 KCSE Joint Examinations</h3>
          <p>Inter-school joint exams modelled on KNEC standards. Covering all subjects with marking schemes and performance analytics.</p>
        </div>

        <div className="resource-card">
          <h3>📅 Termly Examinations</h3>
          <p>End-of-term comprehensive exams for Grade 10. Full coverage of all strands and sub-strands with complete marking guides.</p>
        </div>

        <div className="resource-card">
          <h3>📝 CATs — Continuous Assessment Tests</h3>
          <p>Ready-made CATs per topic and per strand. Designed for ongoing formative assessment aligned to CBC competency levels.</p>
        </div>

        <div className="resource-card">
          <h3>📊 Termly Assessments</h3>
          <p>Structured mid-term and end-of-term assessment packages with rubrics, score sheets and performance reporting templates.</p>
        </div>
      </div>
    </section>
  );
}

export default Assessments;
