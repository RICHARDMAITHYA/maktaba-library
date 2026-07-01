import React from "react";
import "../styles/News.css";

function News() {
  return (
    <section className="news">
      <div className="news-header">
        <h1>News & Updates</h1>
        <p>
          Stay informed with the latest announcements, events, and educational
          insights from MAKTABA MART.
        </p>
      </div>

      <div className="news-grid">
        <article className="news-card">
          <h3>Launch of Premier Revision Series</h3>
          <p className="date">June 2026</p>
          <p>
            We proudly unveil our Grade 10 Premier Revision Series, aligned to
            Competency-Based Education standards.
          </p>
          <a href="#">Read More</a>
        </article>

        <article className="news-card">
          <h3>Teacher Empowerment Workshop</h3>
          <p className="date">May 2026</p>
          <p>
            Over 500 teachers joined our Nairobi workshop to explore digital
            learning solutions and assessment tools.
          </p>
          <a href="#">Read More</a>
        </article>

        <article className="news-card">
          <h3>Digital Learning Expansion</h3>
          <p className="date">April 2026</p>
          <p>
            MAKTABA MART expands its digital ecosystem, offering e-learning
            modules accessible across Africa.
          </p>
          <a href="#">Read More</a>
        </article>
      </div>
    </section>
  );
}

export default News;
