import React, { useState } from "react";
import { Link } from "react-router-dom";
import FlagStripe from "./FlagStripe";
import "../styles/Footer.css";

function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Newsletter signup logic here
    setEmail("");
  };

  return (
    <>
      <footer className="footer">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Column 1: Company Info */}
          <div className="footer-column">
            <div className="footer-logo">
              <div className="logo-tile">M</div>
              <h3>MAKTABA MART</h3>
            </div>
            <p className="company-tagline">Dedicated to Excellence in Learning</p>
            <p className="company-desc">Africa's emerging knowledge empowerment institution delivering quality educational solutions.</p>
            <div className="social-links">
              <a href="#" title="Facebook" aria-label="Facebook">📘</a>
              <a href="#" title="Twitter" aria-label="Twitter">𝕏</a>
              <a href="#" title="LinkedIn" aria-label="LinkedIn">💼</a>
              <a href="#" title="Instagram" aria-label="Instagram">📷</a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="footer-column">
            <h4>Products</h4>
            <ul>
              <li><Link to="/bookshop">Revision Books</Link></li>
              <li><Link to="/ict-learning">ICT Learning</Link></li>
              <li><Link to="/teachers">Teacher Resources</Link></li>
              <li><Link to="/assessments">Assessments</Link></li>
              <li><Link to="/school-management">School Management</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/academic-publishing">Academic Publishing</Link></li>
              <li><Link to="/knowledge-centre">Knowledge Centre</Link></li>
              <li><Link to="/impact">Our Impact</Link></li>
              <li><Link to="/news">News & Updates</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="footer-column">
            <h4>Get in Touch</h4>
            <div className="contact-info">
              <p><strong>Email:</strong> <a href="mailto:info@makhtabamart.co.ke">info@makhtabamart.co.ke</a></p>
              <p><strong>Phone:</strong> <a href="tel:+254714464589">0714 464 589</a></p>
              <p><strong>Address:</strong> Luther Plaza, Ground Floor Suite 4, Nyerere Road, Nairobi</p>
            </div>
            <div className="newsletter-signup">
              <p className="newsletter-label">Stay Updated</p>
              <form onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} MAKTABA MART Educational Publishers. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="divider">·</span>
            <a href="#terms">Terms of Service</a>
            <span className="divider">·</span>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </footer>
      <FlagStripe /> {/* Kenya flag stripe at bottom */}
    </>
  );
}

export default Footer;
