import React from "react";
import aboutHero from "../assets/mk2.PNG";
import aboutImg3 from "../assets/mk3.PNG";
import aboutImg4 from "../assets/mk4.PNG";
import aboutImg5 from "../assets/mk5.PNG";
import "../styles/About.css";

function About() {
  return (
    <section className="about">
      <div className="about-hero">
        <img className="about-hero-image" src={aboutHero} alt="About MAKTABA MART" />
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>
            MAKTABA MART is Africa’s emerging knowledge empowerment institution —
            dedicated to excellence in learning, teacher empowerment, and digital
            transformation. We are not just publishers; we are builders of futures.
          </p>
        </div>
      </div>

      <div className="about-strip">
        <img className="about-strip-image" src={aboutImg3} alt="MAKTABA MART education" />
        <img className="about-strip-image" src={aboutImg4} alt="MAKTABA MART publishing" />
        <img className="about-strip-image" src={aboutImg5} alt="MAKTABA MART digital learning" />
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
