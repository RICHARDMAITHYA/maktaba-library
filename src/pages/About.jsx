import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="about">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>
          MAKTABA MART is Africa’s emerging knowledge empowerment institution —
          dedicated to excellence in learning, teacher empowerment, and digital
          transformation. We are not just publishers; we are builders of futures.
        </p>
      </div>

      <div className="mission-vision">
        <h2>Our Mission</h2>
        <p>
          To empower learners and educators with world-class resources aligned
          to Competency-Based Education (CBE), transforming classrooms across Africa.
        </p>

        <h2>Our Vision</h2>
        <p>
          A pan-African institution of knowledge excellence, bridging curriculum
          and opportunity, and positioning Africa as a leader in education innovation.
        </p>
      </div>

      <div className="values">
        <h2>Our Values</h2>
        <ul>
          <li>Academic Excellence</li>
          <li>Teacher Empowerment</li>
          <li>Knowledge Empowerment</li>
          <li>Digital Learning Ecosystem</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
