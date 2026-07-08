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
          <div className="book-cover book-cover-cp1">
            <span className="book-cover-fallback" aria-hidden="true" />
          </div>
          <p>English</p>
          <p className="book-meta">Languages · CBE</p>
          <button className="book-order" type="button">Order</button>
        </div>

          <div className="book-card">
          <div className="book-cover book-cover-cp3">
            <span className="book-cover-fallback" aria-hidden="true" />
          </div>
          <p>English Literature</p>
          <p className="book-meta">Literature · CBE</p>
          <button className="book-order" type="button">Order</button>
        </div>

        <div className="book-card">
          <div className="book-cover book-cover-cp2">
            <span className="book-cover-fallback" aria-hidden="true" />
          </div>
          <p>Kiswahili</p>
          <p className="book-meta">Languages · CBE</p>
          <button className="book-order" type="button">Order</button>
        </div>

              <div className="book-card">
          <div className="book-cover book-cover-cp1">
            <span className="book-cover-fallback" aria-hidden="true" />
          </div>
          <p>Kiswahili Fasihi</p>
          <p className="book-meta">Literature · CBE</p>
          <button className="book-order" type="button">Order</button>
        </div>

        <div className="book-card">
          <div className="book-cover book-cover-cp2">
            <span className="book-cover-fallback" aria-hidden="true" />
          </div>
          <p>Essential Maths</p>
          <p className="book-meta">Mathematics · CBE</p>
          <button className="book-order" type="button">Order</button>
        </div>

        <div className="book-card">
          <div className="book-cover book-cover-cp3">
            <span className="book-cover-fallback" aria-hidden="true" />
          </div>
          <p>Core Mathematics</p>
          <p className="book-meta">Mathematics · CBE</p>
          <button className="book-order" type="button">Order</button>
        </div>

        <div className="book-card">
          <div className="book-cover book-cover-cp1">
            <span className="book-cover-fallback" aria-hidden="true" />
          </div>
          <p>Biology</p>
          <p className="book-meta">Sciences · CBE</p>
          <button className="book-order" type="button">Order</button>
        </div>

        <div className="book-card">
          <div className="book-cover book-cover-cp2">
            <span className="book-cover-fallback" aria-hidden="true" />
          </div>
          <p>Chemistry</p>
          <p className="book-meta">Sciences · CBE</p>
          <button className="book-order" type="button">Order</button>
        </div>

        <div className="book-card">
          <div className="book-cover book-cover-cp3">
            <span className="book-cover-fallback" aria-hidden="true" />
          </div>
          <p>Physics</p>
          <p className="book-meta">Sciences · CBE</p>
          <button className="book-order" type="button">Order</button>
        </div>

        <div className="book-card">
          <div className="book-cover book-cover-cp1">
            <span className="book-cover-fallback" aria-hidden="true" />
          </div>
          <p>General Science</p>
          <p className="book-meta">Sciences · CBE</p>
          <button className="book-order" type="button">Order</button>
        </div>

        <div className="book-card">
          <div className="book-cover book-cover-cp2">
            <span className="book-cover-fallback" aria-hidden="true" />
          </div>
          <p>Business Studies</p>
          <p className="book-meta">Social Sciences · CBE</p>
          <button className="book-order" type="button">Order</button>
        </div>

        <div className="book-card">
          <div className="book-cover book-cover-cp3">
            <span className="book-cover-fallback" aria-hidden="true" />
          </div>
          <p>Community Service Learning</p>
          <p className="book-meta">Social Sciences · CBE</p>
          <button className="book-order" type="button">Order</button>
        </div>

        <div className="book-card">
          <div className="book-cover book-cover-cp1">
            <span className="book-cover-fallback" aria-hidden="true" />
          </div>
          <p>Computer Studies</p>
          <p className="book-meta">Technology · CBE</p>
          <button className="book-order" type="button">Order</button>
        </div>

        <div className="book-card">
          <div className="book-cover book-cover-cp2">
            <span className="book-cover-fallback" aria-hidden="true" />
          </div>
          <p>ICT</p>
          <p className="book-meta">Technology · CBE</p>
          <button className="book-order" type="button">Order</button>
        </div>

        <div className="book-card">
          <div className="book-cover book-cover-cp3">
            <span className="book-cover-fallback" aria-hidden="true" />
          </div>
          <p>Visual Arts</p>
          <p className="book-meta">Creative Arts · CBE</p>
          <button className="book-order" type="button">Order</button>
        </div>

        <div className="book-card">
          <div className="book-cover book-cover-cp1">
            <span className="book-cover-fallback" aria-hidden="true" />
          </div>
          <p>Music</p>
          <p className="book-meta">Creative Arts · CBE</p>
          <button className="book-order" type="button">Order</button>
        </div>

        <div className="book-card">
          <div className="book-cover book-cover-cp2">
            <span className="book-cover-fallback" aria-hidden="true" />
          </div>
          <p>Physical Education</p>
          <p className="book-meta">Health & PE · CBE</p>
          <button className="book-order" type="button">Order</button>
        </div>

        <div className="book-card">
          <div className="book-cover book-cover-cp3">
            <span className="book-cover-fallback" aria-hidden="true" />
          </div>
          <p>Agriculture & Nutrition</p>
          <p className="book-meta">Applied · CBE</p>
          <button className="book-order" type="button">Order</button>
        </div>

      </div>
    </section>
  );
}


export default Bookshop;
