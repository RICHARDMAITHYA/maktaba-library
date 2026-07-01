import React from "react";
import "../styles/Events.css";

function Events() {
  return (
    <section className="events">
      <div className="events-header">
        <h1>Upcoming Events</h1>
        <p>
          Join our workshops, conferences, and training sessions designed to
          empower educators and learners across Africa.
        </p>
      </div>

      <div className="events-grid">
        <div className="event-card">
          <h3>Teacher Empowerment Workshop</h3>
          <p className="date">July 15, 2026 · Nairobi</p>
          <p>
            A hands-on workshop equipping teachers with digital learning tools
            and Competency-Based Education strategies.
          </p>
          <a href="#">Register</a>
        </div>

        <div className="event-card">
          <h3>Publishing Innovation Conference</h3>
          <p className="date">August 20, 2026 · Virtual</p>
          <p>
            Explore the future of academic publishing and digital knowledge
            ecosystems with global experts.
          </p>
          <a href="#">Register</a>
        </div>

        <div className="event-card">
          <h3>Student Revision Bootcamp</h3>
          <p className="date">September 5, 2026 · Mombasa</p>
          <p>
            Intensive revision sessions for Grade 10 learners, aligned to CBE
            standards and exam preparation.
          </p>
          <a href="#">Register</a>
        </div>
      </div>
    </section>
  );
}

export default Events;
