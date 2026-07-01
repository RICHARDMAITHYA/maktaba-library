import React, { useState } from "react";
import { Link } from "react-router-dom";
import FlagStripe from "./FlagStripe";
import boostLogo from "../assets/boost.PNG";
import "../styles/Navigation.css";

function Navigation() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      <FlagStripe />
      <nav className="navigation">
        <div className="logo">
          <img src={boostLogo} alt="Logo" className="logo-img" />
          <span className="logo-text">MAKTABA MART</span>
        </div>
        <ul>
          <li><Link to="/"> Home</Link></li>

          <li className="dropdown" onClick={() => toggleDropdown("products")}>
            <span className={openDropdown === "products" ? "active" : ""}>
               Products <span className="arrow">▼</span>
            </span>
            {openDropdown === "products" && (
              <ul className="dropdown-menu">
                <li><Link to="/bookshop"> Revision Books</Link></li>
                <li><Link to="/digital-learning"> ICT Learning</Link></li>
                <li><Link to="/teachers"> Teacher Resources</Link></li>
                <li><Link to="/assessments"> Assessments</Link></li>
                <li><Link to="/school-management"> School Management</Link></li>
              </ul>
            )}
          </li>

          <li className="dropdown" onClick={() => toggleDropdown("about")}>
            <span className={openDropdown === "about" ? "active" : ""}>
               About <span className="arrow">▼</span>
            </span>
            {openDropdown === "about" && (
              <ul className="dropdown-menu">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/academic-publishing">Academic Publishing</Link></li>
                <li><Link to="/leadership">Leadership Team</Link></li>
                <li><Link to="/partners">Our Partners</Link></li>
              </ul>
            )}
          </li>

          <li className="dropdown" onClick={() => toggleDropdown("explore")}>
            <span className={openDropdown === "explore" ? "active" : ""}>
               Explore <span className="arrow">▼</span>
            </span>
            {openDropdown === "explore" && (
              <ul className="dropdown-menu">
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/events"> Events</Link></li>
                <li><Link to="/news"> News</Link></li>
                <li><Link to="/careers"> Careers</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/contact"> Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
