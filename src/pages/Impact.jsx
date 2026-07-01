import React from "react";
import "../styles/Impact.css";

function Impact() {
  return (
    <section className="impact">
      <div className="impact-header">
        <h1>Impact & Community</h1>
        <p>
          Our success metrics reflect the transformative reach of MAKTABA MART
          across Africa.
        </p>
      </div>

      <div className="impact-grid">
        <div className="impact-card">
          <h3>Books Distributed</h3>
          <p className="counter">500,000+</p>
        </div>
        <div className="impact-card">
          <h3>Learners Reached</h3>
          <p className="counter">200,000+</p>
        </div>
        <div className="impact-card">
          <h3>Teachers Empowered</h3>
          <p className="counter">10,000+</p>
        </div>
        <div className="impact-card">
          <h3>Schools Served</h3>
          <p className="counter">1,500+</p>
        </div>
        <div className="impact-card">
          <h3>Digital Users</h3>
          <p className="counter">50,000+</p>
        </div>
        <div className="impact-card">
          <h3>Partnerships Formed</h3>
          <p className="counter">100+</p>
        </div>
      </div>
    </section>
  );
}

export default Impact;
