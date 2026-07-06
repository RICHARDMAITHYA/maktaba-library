import React from "react";
import "../styles/Bookshop.css";

// PDF covers removed: missing assets prevented production build.
// Keeping page layout intact; covers will appear as placeholders.
const cslGrade10Cover = null;
const samaritanSpineCover = null;


function Bookshop() {
  return (
    <section className="bookshop">
      <div className="bookshop-header">
        <h1>Premier Revision Books — Grade 10</h1>
        <p>
          Comprehensive subject-specific revision books for every CBE Learning Area. Fully aligned to the KICD Curriculum Designs, crafted to build mastery and exam confidence.
        </p>
      </div>

      <div className="books-grid">
        <div className="book-card">
          <div className="book-cover">
            <object
              className="book-cover-pdf"
              data={cslGrade10Cover}
              type="application/pdf"
              aria-label="English (cover)"
            />
          </div>
          <p>English</p>
          <p className="book-meta">Languages · CBE</p>
        </div>

        <div className="book-card">
          <div className="book-cover">
            <object
              className="book-cover-pdf"
              data={samaritanSpineCover}
              type="application/pdf"
              aria-label="Kiswahili (cover)"
            />
          </div>
          <p>Kiswahili</p>
          <p className="book-meta">Languages · CBE</p>
        </div>

        <div className="book-card">
          <div className="book-cover">
            <span></span>
          </div>
          <p>English Literature</p>
          <p className="book-meta">Literature · CBE</p>
        </div>

        <div className="book-card">
          <div className="book-cover">
            <span></span>
          </div>
          <p>Kiswahili Fasihi</p>
          <p className="book-meta">Literature · CBE</p>
        </div>

        <div className="book-card">
          <div className="book-cover">
            <span></span>
          </div>
          <p>Essential Maths</p>
          <p className="book-meta">Mathematics · CBE</p>
        </div>

        <div className="book-card">
          <div className="book-cover">
            <span></span>
          </div>
          <p>Core Mathematics</p>
          <p className="book-meta">Mathematics · CBE</p>
        </div>

        <div className="book-card">
          <div className="book-cover">
            <span></span>
          </div>
          <p>Biology</p>
          <p className="book-meta">Sciences · CBE</p>
        </div>

        <div className="book-card">
          <div className="book-cover">
            <span></span>
          </div>
          <p>Chemistry</p>
          <p className="book-meta">Sciences · CBE</p>
        </div>

        <div className="book-card">
          <div className="book-cover">
            <span></span>
          </div>
          <p>Physics</p>
          <p className="book-meta">Sciences · CBE</p>
        </div>

        <div className="book-card">
          <div className="book-cover">
            <span></span>
          </div>
          <p>General Science</p>
          <p className="book-meta">Sciences · CBE</p>
        </div>

        <div className="book-card">
          <div className="book-cover">
            <span></span>
          </div>
          <p>Business Studies</p>
          <p className="book-meta">Social Sciences · CBE</p>
        </div>

        <div className="book-card">
          <div className="book-cover">
            <span></span>
          </div>
          <p>Community Service Learning</p>
          <p className="book-meta">Social Sciences · CBE</p>
        </div>

        <div className="book-card">
          <div className="book-cover">
            <span></span>
          </div>
          <p>Computer Studies</p>
          <p className="book-meta">Technology · CBE</p>
        </div>

        <div className="book-card">
          <div className="book-cover">
            <span></span>
          </div>
          <p>ICT</p>
          <p className="book-meta">Technology · CBE</p>
        </div>

        <div className="book-card">
          <div className="book-cover">
            <span></span>
          </div>
          <p>Visual Arts</p>
          <p className="book-meta">Creative Arts · CBE</p>
        </div>

        <div className="book-card">
          <div className="book-cover">
            <span></span>
          </div>
          <p>Music</p>
          <p className="book-meta">Creative Arts · CBE</p>
        </div>

        <div className="book-card">
          <div className="book-cover">
            <span></span>
          </div>
          <p>Physical Education</p>
          <p className="book-meta">Health & PE · CBE</p>
        </div>

        <div className="book-card">
          <div className="book-cover">
            <span></span>
          </div>
          <p>Agriculture & Nutrition</p>
          <p className="book-meta">Applied · CBE</p>
        </div>
      </div>
    </section>
  );
}


export default Bookshop;
