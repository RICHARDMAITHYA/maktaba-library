import React from "react";
import "../styles/Leadership.css";

function Leadership() {
  return (
    <section className="leadership">
      <div className="leadership-header">
        <h1>Leadership Team</h1>
        <p>
          MAKTABA MART is guided by visionary leaders dedicated to excellence in
          learning and knowledge empowerment.
        </p>
      </div>

      <div className="leaders-grid">
        <div className="leader-card">
          <h3>Ignatius Magero Makokha</h3>
          <p>Founder & Chairperson</p>
        </div>
        <div className="leader-card">
          <h3>Tryshler Sherly Baraka</h3>
          <p>Managing Director</p>
        </div>
        <div className="leader-card">
          <h3>Paul Chikombe</h3>
          <p>Chief Executive Officer</p>
        </div>
        <div className="leader-card">
          <h3>Dr. Odundo</h3>
          <p>Publishing Manager</p>
        </div>
        <div className="leader-card">
          <h3>Mr. Mutua</h3>
          <p>Chief Editor</p>
        </div>
      </div>
    </section>
  );
}

export default Leadership;
