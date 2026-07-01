import React from "react";
import "../styles/Bookshop.css";

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
        <div className="book-card"><span>🇬🇧</span><p>English</p><p style={{fontSize: '12px', color: '#999'}}>Languages · CBE</p></div>
        <div className="book-card"><span>🇰🇪</span><p>Kiswahili</p><p style={{fontSize: '12px', color: '#999'}}>Languages · CBE</p></div>
        <div className="book-card"><span>📖</span><p>English Literature</p><p style={{fontSize: '12px', color: '#999'}}>Literature · CBE</p></div>
        <div className="book-card"><span>📜</span><p>Kiswahili Fasihi</p><p style={{fontSize: '12px', color: '#999'}}>Literature · CBE</p></div>
        <div className="book-card"><span>➕</span><p>Essential Maths</p><p style={{fontSize: '12px', color: '#999'}}>Mathematics · CBE</p></div>
        <div className="book-card"><span>∑</span><p>Core Mathematics</p><p style={{fontSize: '12px', color: '#999'}}>Mathematics · CBE</p></div>
        <div className="book-card"><span>🔬</span><p>Biology</p><p style={{fontSize: '12px', color: '#999'}}>Sciences · CBE</p></div>
        <div className="book-card"><span>⚗️</span><p>Chemistry</p><p style={{fontSize: '12px', color: '#999'}}>Sciences · CBE</p></div>
        <div className="book-card"><span>⚡</span><p>Physics</p><p style={{fontSize: '12px', color: '#999'}}>Sciences · CBE</p></div>
        <div className="book-card"><span>🌍</span><p>General Science</p><p style={{fontSize: '12px', color: '#999'}}>Sciences · CBE</p></div>
        <div className="book-card"><span>💼</span><p>Business Studies</p><p style={{fontSize: '12px', color: '#999'}}>Social Sciences · CBE</p></div>
        <div className="book-card"><span>🤝</span><p>Community Service Learning</p><p style={{fontSize: '12px', color: '#999'}}>Social Sciences · CBE</p></div>
        <div className="book-card"><span>💻</span><p>Computer Studies</p><p style={{fontSize: '12px', color: '#999'}}>Technology · CBE</p></div>
        <div className="book-card"><span>📡</span><p>ICT</p><p style={{fontSize: '12px', color: '#999'}}>Technology · CBE</p></div>
        <div className="book-card"><span>🎨</span><p>Visual Arts</p><p style={{fontSize: '12px', color: '#999'}}>Creative Arts · CBE</p></div>
        <div className="book-card"><span>🎵</span><p>Music</p><p style={{fontSize: '12px', color: '#999'}}>Creative Arts · CBE</p></div>
        <div className="book-card"><span>🏃</span><p>Physical Education</p><p style={{fontSize: '12px', color: '#999'}}>Health & PE · CBE</p></div>
        <div className="book-card"><span>🌱</span><p>Agriculture & Nutrition</p><p style={{fontSize: '12px', color: '#999'}}>Applied · CBE</p></div>
      </div>
    </section>
  );
}

export default Bookshop;
