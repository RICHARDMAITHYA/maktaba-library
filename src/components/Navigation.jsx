import React, { useState } from "react";
import { Link } from "react-router-dom";

import boostLogo from "../assets/boost.PNG";
import "../styles/Navigation.css";

function Navigation() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>

      <nav className="navigation">
        <div className="logo">
          <img src={boostLogo} alt="Logo" className="logo-img" />
          <span className="logo-text">MAKTABA MART</span>
        </div>
        <ul>
          <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Home</Link></li>

          <li className="dropdown" onClick={() => toggleDropdown("products")}>
            <span className={openDropdown === "products" ? "active" : ""}>
               Products <span className="arrow">▼</span>
            </span>
            {openDropdown === "products" && (
              <ul className="dropdown-menu">
                <li><Link to="/bookshop" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Revision Books</Link></li>
                <li><Link to="/digital-learning" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> ICT Learning</Link></li>
                <li><Link to="/teachers" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Teacher Resources</Link></li>
                <li><Link to="/assessments" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Assessments</Link></li>
                <li><Link to="/school-management" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> School Management</Link></li>
              </ul>
            )}
          </li>

          <li className="dropdown" onClick={() => toggleDropdown("about")}>
            <span className={openDropdown === "about" ? "active" : ""}>
               About <span className="arrow">▼</span>
            </span>
            {openDropdown === "about" && (
              <ul className="dropdown-menu">
                <li><Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>About Us</Link></li>
                <li><Link to="/academic-publishing" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Academic Publishing</Link></li>
                <li><Link to="/leadership" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Leadership Team</Link></li>
                <li><Link to="/partners" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Our Partners</Link></li>
              </ul>
            )}
          </li>

          <li className="dropdown" onClick={() => toggleDropdown("explore")}>
            <span className={openDropdown === "explore" ? "active" : ""}>
               Explore <span className="arrow">▼</span>
            </span>
            {openDropdown === "explore" && (
              <ul className="dropdown-menu">
                <li><Link to="/resources" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Resources</Link></li>
                <li><Link to="/events" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Events</Link></li>
                <li><Link to="/news" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> News</Link></li>
                <li><Link to="/careers" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Careers</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
