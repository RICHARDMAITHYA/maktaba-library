import React from "react";
import "../styles/KnowledgeCentre.css";

function KnowledgeCentre() {
  return (
    <section className="knowledge-centre">
      <div className="kc-header">
        <h1>Knowledge Centre</h1>
        <p>
          Articles, curriculum guidance, and thought leadership from MAKTABA MART —
          empowering educators and learners with insights and resources.
        </p>
      </div>

      <div className="articles-grid">
        <div className="article-card">
          <h3>Understanding Competency-Based Education</h3>
          <p>
            A deep dive into CBE principles and how they transform classrooms.
          </p>
          <a href="#">Read More →</a>
        </div>

        <div className="article-card">
          <h3>Digital Tools for Teachers</h3>
          <p>
            How ICT integration supports effective teaching and learner engagement.
          </p>
          <a href="#">Read More →</a>
        </div>

        <div className="article-card">
          <h3>Premier Revision Series Impact</h3>
          <p>
            Success stories from schools using MAKTABA MART resources.
          </p>
          <a href="#">Read More →</a>
        </div>
      </div>
    </section>
  );
}

export default KnowledgeCentre;
