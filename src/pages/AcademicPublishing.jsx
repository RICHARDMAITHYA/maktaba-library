import React from "react";
import academicHero from "../assets/mk4.PNG";
import "../styles/About.css";

function AcademicPublishing() {
  return (
    <section className="about">
      <div className="about-hero">
        <img className="about-hero-image" src={academicHero} alt="Academic Publishing" />
        <div className="about-hero-content">
          <h1>Academic Publishing</h1>
          <p>
            Our publishing approach bridges curriculum and classroom, empowering learners
            and educators with world-class resources aligned to CBE standards and KICD designs.
          </p>
        </div>
      </div>

      <div className="mission-vision">
        <h2>Our Publishing Philosophy</h2>
        <p>
          MAKTABA MART believes that educational publishing should not simply present information — it should build competencies, inspire critical thinking, and prepare learners for real-world challenges. Every publication is structured around the Competency-Based Education framework.
        </p>

        <h2 style={{marginTop: '40px'}}>Publication Categories</h2>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '30px'}}>
        <div style={{backgroundColor: '#f5f5f5', padding: '24px', borderRadius: '8px', borderLeft: '4px solid #006B3F'}}>
          <h3 style={{color: '#006B3F', marginBottom: '12px'}}> Premier Revision Series</h3>
          <p style={{fontSize: '14px', lineHeight: '1.6', color: '#555'}}>
            Comprehensive subject-specific revision books aligned to KICD Curriculum Designs. Each title covers all strands and sub-strands with model questions, worked answers, and self-assessment sections.
          </p>
        </div>

        <div style={{backgroundColor: '#f5f5f5', padding: '24px', borderRadius: '8px', borderLeft: '4px solid #C8102E'}}>
          <h3 style={{color: '#006B3F', marginBottom: '12px'}}> Digital Learning Materials</h3>
          <p style={{fontSize: '14px', lineHeight: '1.6', color: '#555'}}>
            ICT-integrated resources including academic videos, animations, set books performances, and teaching videos. Designed for modern classrooms and online learning environments.
          </p>
        </div>

        <div style={{backgroundColor: '#f5f5f5', padding: '24px', borderRadius: '8px', borderLeft: '4px solid #F2B825'}}>
          <h3 style={{color: '#006B3F', marginBottom: '12px'}}>Teacher Resources</h3>
          <p style={{fontSize: '14px', lineHeight: '1.6', color: '#555'}}>
            Professionally designed teaching materials including PowerPoint presentations, schemes of work, topical notes, and assessment rubrics — all aligned to the KICD format.
          </p>
        </div>

        <div style={{backgroundColor: '#f5f5f5', padding: '24px', borderRadius: '8px', borderLeft: '4px solid #071828'}}>
          <h3 style={{color: '#006B3F', marginBottom: '12px'}}>✅ Assessment Materials</h3>
          <p style={{fontSize: '14px', lineHeight: '1.6', color: '#555'}}>
            Rigorous, exam-standard assessments including KCSE joint examinations, termly exams, CATs, and comprehensive assessment packages aligned to the CBE framework.
          </p>
        </div>
      </div>

      <div className="values" style={{marginTop: '50px'}}>
        <h2>Our Methodology</h2>
        <ul style={{listStyle: 'none', padding: 0, display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '20px'}}>
          <li style={{backgroundColor: '#006B3F', color: '#fff', padding: '10px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em'}}>KICD-Aligned</li>
          <li style={{backgroundColor: '#C8102E', color: '#fff', padding: '10px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em'}}>CBE Structured</li>
          <li style={{backgroundColor: '#F2B825', color: '#071828', padding: '10px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em'}}>Exam-Focused</li>
          <li style={{backgroundColor: '#071828', color: '#fff', padding: '10px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em'}}>Educator-Authored</li>
          <li style={{backgroundColor: '#006B3F', color: '#fff', padding: '10px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em'}}>Competency-Driven</li>
          <li style={{backgroundColor: '#C8102E', color: '#fff', padding: '10px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em'}}>Inclusive Design</li>
        </ul>
      </div>
    </section>
  );
}

export default AcademicPublishing;
