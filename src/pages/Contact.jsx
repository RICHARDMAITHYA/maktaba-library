import React from "react";
import SocialLinks from "../components/SocialLinks";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-hero">
        <div className="contact-hero-inner">
          <h1>Contact us</h1>
          <p>Get fast help via email, WhatsApp, or our Nairobi office.</p>

          <div className="contact-hero-links">
            <a href="mailto:info@makhtabamart.co.ke" className="hero-pill">
              Email
            </a>

            <a
              href="https://wa.me/254714464589?text=Hello%20Maktaba%20Mart%2C%20I%20need%20help%20with%20school%20resources.%20"
              target="_blank"
              rel="noreferrer"
              className="hero-pill hero-pill--green"
            >
              WhatsApp
            </a>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Luther+Plaza+Nyerere+Road+Nairobi"
              target="_blank"
              rel="noreferrer"
              className="hero-pill hero-pill--navy"
            >
              Directions
            </a>
          </div>
        </div>
      </div>

      <div className="contact-steps">
        <h2>How can we help?</h2>

        <div className="help-list">
          <div className="help-item">
            <div className="help-number">1</div>
            <div className="help-content">
              <h3>Email support</h3>
              <p>
                Send your enquiry and we’ll follow up regarding orders, ICT, and
                teacher resources.
              </p>
              <ul className="help-bullets">
                <li>Orders & availability</li>
                <li>Product questions & recommendations</li>
                <li>Teacher resources support</li>
              </ul>
              <a href="mailto:info@makhtabamart.co.ke" className="contact-link">
                Email us: info@makhtabamart.co.ke
              </a>
            </div>
          </div>

          <div className="help-item">
            <div className="help-number">2</div>
            <div className="help-content">
              <h3>WhatsApp quick answers</h3>
              <p>
                Ideal for schools and educators who need fast guidance on what’s
                available.
              </p>
              <ul className="help-bullets">
                <li>Pricing & packages</li>
                <li>Stock updates</li>
                <li>Delivery guidance</li>
              </ul>
              <a
                href="https://wa.me/254714464589?text=Hello%20Maktaba%20Mart%2C%20I%20would%20like%20to%20know%20more%20about%20your%20school%20resource%20packages."
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="help-item">
            <div className="help-number">3</div>
            <div className="help-content">
              <h3>Visit our office</h3>
              <p>Plan your visit and speak with our team at Luther Plaza.</p>
              <ul className="help-bullets">
                <li>Meet the team</li>
                <li>View selected resources</li>
                <li>Discuss your school needs</li>
              </ul>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Luther+Plaza+Nyerere+Road+Nairobi"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-layout">
        <div className="contact-methods">
          <div className="methods-block">
            <h3>Contact details</h3>
            <p className="methods-intro">
              Choose the fastest channel for your enquiry.
            </p>

            <div className="method-row">
              <div className="method-label">Email</div>
              <div className="method-value">
                <a href="mailto:info@makhtabamart.co.ke">info@makhtabamart.co.ke</a>
              </div>
            </div>

            <div className="method-row">
              <div className="method-label">WhatsApp</div>
              <div className="method-value">
                <a
                  href="https://wa.me/254714464589?text=Hello%20Maktaba%20Mart%2C%20I%20need%20help%20with%20school%20resources."
                  target="_blank"
                  rel="noreferrer"
                >
                  +254 714 464 589
                </a>
              </div>
            </div>

            <div className="method-row">
              <div className="method-label">Office</div>
              <div className="method-value">
                Luther Plaza, Ground Floor Suite 4, Nyerere Road, Nairobi
              </div>
            </div>
          </div>

          <div className="contact-social">
            <h3>Follow us</h3>
            <p>Stay connected for updates, new books, and learning resources.</p>

            <SocialLinks
              urls={{
                facebook:
                  "https://www.facebook.com/profile.php?id=61591425413251",
                instagram:
                  "https://www.instagram.com/makht.aba?utm_source=qr&igsh=MTRoYTB6NHpyamRwNQ%3D%3D",
              }}
            />
          </div>
        </div>

        <div className="contact-map">
          <div className="map-header">
            <h3>Find us</h3>
            <p>Luther Plaza, Ground Floor Suite 4, Nyerere Road, Nairobi</p>
          </div>

          <div className="map-frame">
            <iframe
              title="Maktaba Mart Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.490708593254!2d36.82188707542876!3d-1.2909259361374817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10ba8edeb5a5%3A0x73e30c3ded7f8bf8!2sLuther%20Plaza!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="map-footer">
            <a
              href="https://www.google.com/maps/place/Luther+Plaza,+Nairobi"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
