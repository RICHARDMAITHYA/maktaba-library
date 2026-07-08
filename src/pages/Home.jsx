import React from "react";
import heroImg from "../assets/mk.PNG";
import cp1 from "../assets/cp1.PNG";
import cp2 from "../assets/cp2.PNG";
import cp3 from "../assets/cp3.PNG";

import "../styles/Home.css";

function Home() {
  return (
    <section className="home" aria-label="MAKTABA MART Home">

      <div className="hero">
        <img className="hero-image" src={heroImg} alt="MAKTABA MART learning" />
        <div className="hero-content container">
          <h1 className="hero-headline">Dedicated to Excellence in Learning</h1>
          <p className="hero-sub">
            MAKTABA MART is Africa's emerging knowledge empowerment institution — delivering academic excellence, teacher empowerment, and digital learning solutions for transformative education.
          </p>
          <div className="hero-cta">
            <a href="/bookshop" className="btn-primary">
              Explore Publications
            </a>
            <a href="/contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <section className="home-section value-prop">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Quality Learning</div>
            <h2>
              Your Partner for <span>Quality Education</span> Materials
            </h2>
          </div>
          <p className="lead">
            At MAKTABA MART Educational Publishers, we bridge the gap between curriculum and classroom. Our products are crafted by experienced educators to meet the demands of the Competency-Based Curriculum at Senior School level.
          </p>
        </div>
      </section>


      <section className="home-section revision-books">
        <div className="container revision-books-inner">
          <div className="revision-books-content">
            <div className="section-header">
              <div className="eyebrow">Bookshop Picks</div>
              <h2>Revision Books</h2>
            </div>
            <p>
              Premier revision books built to strengthen mastery and exam confidence — aligned to KICD curriculum designs.
            </p>

            <div className="revision-books-cards" aria-label="Featured revision books">
              <a className="revision-book-card" href="/bookshop" aria-label="English Revision Books">
                <img className="revision-book-card-img" src={cp1} alt="English revision book cover" />
                <div className="revision-book-card-title">English</div>
                <div className="revision-book-card-desc">Revision practice aligned to the KICD curriculum for better exam readiness.</div>
              </a>
              <a className="revision-book-card" href="/bookshop" aria-label="Kiswahili Revision Books">
                <img className="revision-book-card-img" src={cp2} alt="Kiswahili revision book cover" />
                <div className="revision-book-card-title">Kiswahili</div>
                <div className="revision-book-card-desc">Focused practice to help learners master concepts and answer exam-style questions.</div>
              
              </a>
              <a className="revision-book-card" href="/bookshop" aria-label="Essential Maths Revision Books">
                <img className="revision-book-card-img" src={cp3} alt="Essential Maths revision book cover" />
                <div className="revision-book-card-title">Essential Maths</div>
                <div className="revision-book-card-desc">Step-by-step revision with lots of practice questions for grade 10 success.</div>
                
              </a>
              <a className="revision-book-card" href="/bookshop" aria-label="Biology Revision Books">
                <img className="revision-book-card-img" src={cp1} alt="Biology revision book cover" />
                <div className="revision-book-card-title">Biology</div>
                <div className="revision-book-card-desc">Clear summaries and key diagrams to revise and score higher.</div>
                
              </a>

            </div>

            <a href="/bookshop" className="revision-books-cta btn btn-primary">
              Open Revision Bookshop
            </a>
          </div>
        </div>
      </section>




      <section className="home-section pillars">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">MAKTABA MART</div>
            <h2>Our Strategic Pillars</h2>
          </div>

          <div className="pillars-grid" aria-label="Our Strategic Pillars">
            <article className="pillars-card">
              <div className="pillars-icon" aria-hidden="true">★</div>
              <h3>Academic Excellence</h3>
              <p>World-class resources aligned to KICD standards.</p>
            </article>

            <article className="pillars-card">
              <div className="pillars-icon" aria-hidden="true">⌁</div>
              <h3>Teacher Empowerment</h3>
              <p>Resources that support effective, confident teaching.</p>
            </article>

            <article className="pillars-card">
              <div className="pillars-icon" aria-hidden="true">◈</div>
              <h3>Knowledge Empowerment</h3>
              <p>Accessible learning designed for every learner.</p>
            </article>

            <article className="pillars-card">
              <div className="pillars-icon" aria-hidden="true">⟡</div>
              <h3>Digital Learning</h3>
              <p>ICT-integrated solutions for modern education.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-section testimonials">
        <div className="container">
          <div className="section-header section-header--center">
            <div className="eyebrow eyebrow--light">Educator Feedback</div>
            <h2>What Educators Say</h2>
          </div>

          <div className="testimonials-grid">
            <article className="testimonial-card">
              <p className="testimonial-quote">
                “MAKTABA MART's materials have transformed how our students prepare for exams. Comprehensive and curriculum-aligned.”
              </p>
              <p className="testimonial-author">— Teacher, Nairobi</p>
            </article>

            <article className="testimonial-card">
              <p className="testimonial-quote">
                “Quality and consistency keep customers coming back. Sales have grown steadily.”
              </p>
              <p className="testimonial-author">— Bookshop Manager, Mombasa</p>
            </article>

            <article className="testimonial-card">
              <p className="testimonial-quote">
                “Student performance has improved markedly since we adopted MAKTABA MART resources.”
              </p>
              <p className="testimonial-author">— Principal, Kisumu</p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-section partner-cta">
        <div className="container partner-cta-inner">
          <div>
            <div className="eyebrow eyebrow--dark">Partnerships</div>
            <h2>Become a Partner</h2>
            <p className="lead">
              MAKTABA MART welcomes partnerships with schools, bookshops, and technology partners.
            </p>
          </div>

          <div className="partner-cta-actions">
            <a href="/partners" className="btn btn-accent">
              Explore Partnerships
            </a>
          </div>
        </div>
      </section>

      <section className="home-section newsletter">
        <div className="container">
          <div className="section-header section-header--center">
            <div className="eyebrow">Stay Updated</div>
            <h2>Subscribe for Updates</h2>
            <p className="section-sub">
              Subscribe for updates and learning resources from MAKTABA MART.
            </p>
          </div>

          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" required aria-label="Your email" />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </section>
  );
}

export default Home;

