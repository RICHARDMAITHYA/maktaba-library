import React from "react";
import "../styles/Resources.css";

function Resources() {
  return (
    <section className="resources">
      <div className="resources-header">
        <h1>Resources</h1>
        <p>
          Access downloadable guides, toolkits, and learning materials designed
          to support educators and students in Competency-Based Education.
        </p>
      </div>

      <div className="resources-grid">
        <div className="resource-card">
          <h3>Teacher Toolkit</h3>
          <p>Lesson plans, assessment rubrics, and classroom strategies.</p>
          <a href="#">Download PDF</a>
        </div>

        <div className="resource-card">
          <h3>Student Revision Guide</h3>
          <p>Practice questions and study tips for Grade 10 learners.</p>
          <a href="#">Download PDF</a>
        </div>

        <div className="resource-card">
          <h3>Digital Learning Guide</h3>
          <p>Step-by-step instructions for accessing e-learning modules.</p>
          <a href="#">Download PDF</a>
        </div>

        <div className="resource-card">
          <h3>Curriculum Alignment Chart</h3>
          <p>Overview of how our publications align with CBE standards.</p>
          <a href="#">Download PDF</a>
        </div>
      </div>
    </section>
  );
}

export default Resources;
