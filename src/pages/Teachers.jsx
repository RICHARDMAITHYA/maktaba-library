import React from "react";
import teachersHero from "../assets/mk3.PNG";
import "../styles/Teachers.css";

function Teachers() {
  return (
    <section className="teachers">
      <div className="teachers-header">
        <img className="teachers-hero-image" src={teachersHero} alt="Teacher resources" />
        <div className="teachers-header-content">
          <h1>Teacher Resources Hub</h1>
          <p>
            Everything a teacher needs — from lesson-ready PowerPoints to detailed schemes of work, notes and rubrics. Save time. Teach better. Grade 10 CBE aligned.
          </p>
        </div>

      </div>

      <div className="teacher-grid">

        <div className="teacher-card">
          <div className="teacher-num">1</div>
          <div>
            <h3>PowerPoint Presentations</h3>
            <p>Professionally designed, curriculum-aligned PowerPoint slides for all subjects. Ready-to-deliver with rich visuals, concept breakdowns and discussion prompts.</p>
            <div style={{marginTop: '10px', fontSize: '12px', color: '#999'}}>All Subjects • Grade 10 • KICD Aligned • Editable</div>
          </div>
        </div>

        <div className="teacher-card">
          <div className="teacher-num">2</div>
          <div>
            <h3>Schemes of Work</h3>
            <p>Comprehensive termly schemes of work covering all learning areas — structured to align with the official KICD curriculum designs and lesson plan requirements.</p>
            <div style={{marginTop: '10px', fontSize: '12px', color: '#999'}}>All Terms • All Subjects • KICD Format • Editable</div>
          </div>
        </div>

        <div className="teacher-card">
          <div className="teacher-num">3</div>
          <div>
            <h3>Topical Notes</h3>
            <p>Well-structured, teacher-authored topical notes for every strand and sub-strand. Ideal for lesson planning, revision sessions and student handouts.</p>
            <div style={{marginTop: '10px', fontSize: '12px', color: '#999'}}>Strand-by-Strand • Concise • Printable • Editable</div>
          </div>
        </div>

        <div className="teacher-card">
          <div className="teacher-num">4</div>
          <div>
            <h3>Assessment Rubrics</h3>
            <p>Ready-to-use rubrics for formative and summative assessments. Aligned to CBC competency descriptors, making learner evaluation consistent and objective.</p>
            <div style={{marginTop: '10px', fontSize: '12px', color: '#999'}}>Formative • Summative • CBC Competencies • Editable</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teachers;
