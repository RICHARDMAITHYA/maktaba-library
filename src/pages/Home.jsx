import React from "react";
import heroImg from "../assets/mk.PNG";
import "../styles/Home.css";

function Home() {
  return (
    <section className="home">
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

      <div className="value-prop container">
        <h2>
          Your Partner for <span>Quality Education</span> Materials
        </h2>
        <p>
          At MAKTABA MART Educational Publishers, we bridge the gap between curriculum and classroom. Our products are crafted by experienced educators to meet the demands of the Competency-Based Curriculum at Senior School level.
        </p>
      </div>

      <div style={{ padding: "60px 0", backgroundColor: "#f9f9f9" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", color: " #abbff6", marginBottom: "40px" }}>
            Our Strategic Pillars
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "24px",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                padding: "30px",
                borderRadius: "12px",
                border: "2px solid #abbff6",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "12px" }}></div>
              <h3 style={{ color: "#006B3F", marginBottom: "10px", fontSize: "16px" }}>
                Academic Excellence
              </h3>
              <p style={{ color: "#666", fontSize: "13px" }}>World-class resources aligned to KICD standards</p>
            </div>

            <div
              style={{
                backgroundColor: "#fff",
                padding: "30px",
                borderRadius: "12px",
                border: "2px solid  #abbff6",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "12px" }}></div>
              <h3 style={{ color: "#006B3F", marginBottom: "10px", fontSize: "16px" }}>
                Teacher Empowerment
              </h3>
              <p style={{ color: "#666", fontSize: "13px" }}>Resources to support effective teaching</p>
            </div>

            <div
              style={{
                backgroundColor: "#fff",
                padding: "30px",
                borderRadius: "12px",
                border: "2px solid  #abbff6",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "12px" }}></div>
              <h3 style={{ color: "#006B3F", marginBottom: "10px", fontSize: "16px" }}>
                Knowledge Empowerment
              </h3>
              <p style={{ color: "#666", fontSize: "13px" }}>Accessible learning for all</p>
            </div>

            <div
              style={{
                backgroundColor: "#fff",
                padding: "30px",
                borderRadius: "12px",
                border: "2px solid  #abbff6",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "12px" }}></div>
              <h3 style={{ color: "#006B3F", marginBottom: "10px", fontSize: "16px" }}>
                Digital Learning
              </h3>
              <p style={{ color: "#666", fontSize: "13px" }}>ICT-integrated ecosystem</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "60px", backgroundColor: " #abbff6" }}>
        <h2 style={{ textAlign: "center", color: "#006B3F", marginBottom: "40px" }}>What Educators Say</h2>

        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "24px",
              borderRadius: "8px",
              border: "1px solid  #abbff6",
            }}
          >
            <p style={{ fontStyle: "italic", color: "#555", marginBottom: "16px", lineHeight: "1.6" }}>
              "MAKTABA MART's materials have transformed how our students prepare for exams. Comprehensive and curriculum-aligned."
            </p>
            <p style={{ fontWeight: 600, color: "#006B3F", fontSize: "13px" }}>— Teacher, Nairobi</p>
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              padding: "24px",
              borderRadius: "8px",
              border: "1px solid  #abbff6",
            }}
          >
            <p style={{ fontStyle: "italic", color: "#555", marginBottom: "16px", lineHeight: "1.6" }}>
              "Quality and consistency keep customers coming back. Sales have grown steadily."
            </p>
            <p style={{ fontWeight: 600, color: "#006B3F", fontSize: "13px" }}>— Bookshop Manager, Mombasa</p>
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              padding: "24px",
              borderRadius: "8px",
              border: "1px solid  #abbff6",
            }}
          >
            <p style={{ fontStyle: "italic", color: "#555", marginBottom: "16px", lineHeight: "1.6" }}>
              "Student performance has improved markedly since we adopted MAKTABA MART resources."
            </p>
            <p style={{ fontWeight: 600, color: "#006B3F", fontSize: "13px" }}>— Principal, Kisumu</p>
          </div>
        </div>
      </div>

      <div style={{ padding: "60px", backgroundColor: " #abbff6", color: " #8e9096", textAlign: "center" }}>
        <h2 style={{ color: "#ec0d0d", marginBottom: "30px" }}>Become a Partner</h2>
        <p style={{ marginBottom: "30px", lineHeight: "1.6", maxWidth: "600px", margin: "0 auto 30px" }}>
          MAKTABA MART welcomes partnerships with schools, bookshops, and technology partners.
        </p>
        <a
          href="/partners"
          style={{
            backgroundColor: " #eeeeee",
            color: " #eb0e2b",
            padding: "12px 24px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "13px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            display: "inline-block",
          }}
        >
          Explore Partnerships
        </a>
      </div>

      <div style={{ padding: "60px", backgroundColor: " #f9fafc", textAlign: "center" }}>
        <h2 style={{ color: " #abbff6", marginBottom: "20px" }}>Stay Updated</h2>
        <p style={{ color: "#666", marginBottom: "30px", maxWidth: "600px", margin: "0 auto 30px" }}>
          Subscribe for updates and resources from MAKTABA MART.
        </p>
        <form
          style={{
            display: "flex",
            gap: "12px",
            maxWidth: "400px",
            margin: "0 auto",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <input
            type="email"
            placeholder="Your email"
            required
            style={{
              padding: "10px 12px",
              borderRadius: "4px",
              border: "none",
              flex: 1,
              minWidth: "200px",
              fontSize: "13px",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: " #abbff6",
              color: "#fff",
              padding: "10px 24px",
              borderRadius: "4px",
              border: "none",
              fontWeight: 600,
              fontSize: "13px",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Home;

