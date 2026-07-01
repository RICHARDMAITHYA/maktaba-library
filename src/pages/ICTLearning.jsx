import React from "react";
import "../styles/DigitalLearning.css";

function ICTLearning() {
  return (
    <section className="digital-learning">
      <div className="dl-header">
        <h1>ICT-Integrated Learning Materials</h1>
        <p>
          Bringing the curriculum to life through rich, engaging digital media — designed for modern classroom and online learning. Professionally produced and curriculum-aligned.
        </p>
      </div>

      <div className="dl-grid">
        <div className="dl-card">
          <h3>🎬 Academic Videos</h3>
          <p>High-quality instructional videos covering all CBE subjects. Professionally produced to support visual and auditory learners in and out of the classroom.</p>
          <span style={{fontSize: '12px', color: '#999', marginTop: '10px', display: 'block'}}>All CBE Subjects</span>
        </div>

        <div className="dl-card">
          <h3>🎞️ Animations Library</h3>
          <p>Subject-specific animated explainers for complex concepts across all CBE subjects — perfect for flipped classrooms and revision.</p>
          <span style={{fontSize: '12px', color: '#999', marginTop: '10px', display: 'block'}}>All CBE Subjects</span>
        </div>

        <div className="dl-card">
          <h3>🎭 Set Books Videos</h3>
          <p>Full set book performances and in-depth analysis videos — covering character, themes, style, and model exam responses.</p>
          <span style={{fontSize: '12px', color: '#999', marginTop: '10px', display: 'block'}}>Literature Texts</span>
        </div>

        <div className="dl-card">
          <h3>📺 Documentary Videos</h3>
          <p>Curated and curriculum-linked documentary content to enrich learner understanding across humanities, sciences and social studies.</p>
          <span style={{fontSize: '12px', color: '#999', marginTop: '10px', display: 'block'}}>Cross-Curricular</span>
        </div>

        <div className="dl-card">
          <h3>📱 Teaching Videos</h3>
          <p>Grade 10 teaching videos aligned to KICD Curriculum Designs — topic by topic, strand by strand. Ready for classroom delivery.</p>
          <span style={{fontSize: '12px', color: '#999', marginTop: '10px', display: 'block'}}>Grade 10 • KICD Aligned</span>
        </div>
      </div>
    </section>
  );
}

export default ICTLearning;
