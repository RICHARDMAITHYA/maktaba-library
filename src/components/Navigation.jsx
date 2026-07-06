import React, { useState } from "react";
import { Link } from "react-router-dom";

import boostLogo from "../assets/boost.PNG";
import "../styles/Navigation.css";

function Navigation() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleNavLink = () => {
    setOpenDropdown(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className="navigation">
        <div className="navigation-inner container">
          <div className="logo">
            <img src={boostLogo} alt="Logo" className="logo-img" />
            <span className="logo-text">MAKTABA MART</span>
          </div>

          <button
            className="nav-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={openDropdown === "__menu"}
            onClick={() => setOpenDropdown(openDropdown === "__menu" ? null : "__menu")}
          >
            ☰
          </button>

          <ul className={openDropdown === "__menu" ? "open" : ""}>
            <li>
              <Link to="/" onClick={handleNavLink}>
                Home
              </Link>
            </li>

            <li className="dropdown" onClick={() => toggleDropdown("products")}>
              <span className={openDropdown === "products" ? "active" : ""}>
                Products <span className="arrow">▼</span>
              </span>

              {openDropdown === "products" && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/bookshop" onClick={handleNavLink}>
                      Revision Books
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-learning" onClick={handleNavLink}>
                      ICT Learning
                    </Link>
                  </li>
                  <li>
                    <Link to="/teachers" onClick={handleNavLink}>
                      Teacher Resources
                    </Link>
                  </li>
                  <li>
                    <Link to="/assessments" onClick={handleNavLink}>
                      Assessments
                    </Link>
                  </li>
                  <li>
                    <Link to="/school-management" onClick={handleNavLink}>
                      School Management
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="dropdown" onClick={() => toggleDropdown("about")}>
              <span className={openDropdown === "about" ? "active" : ""}>
                About <span className="arrow">▼</span>
              </span>
              {openDropdown === "about" && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/about" onClick={handleNavLink}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/academic-publishing" onClick={handleNavLink}>
                      Academic Publishing
                    </Link>
                  </li>
                  <li>
                    <Link to="/leadership" onClick={handleNavLink}>
                      Leadership Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/partners" onClick={handleNavLink}>
                      Our Partners
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="dropdown" onClick={() => toggleDropdown("explore")}>
              <span className={openDropdown === "explore" ? "active" : ""}>
                Explore <span className="arrow">▼</span>
              </span>
              {openDropdown === "explore" && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/resources" onClick={handleNavLink}>
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link to="/events" onClick={handleNavLink}>
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link to="/news" onClick={handleNavLink}>
                      News
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" onClick={handleNavLink}>
                      Careers
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/contact" onClick={handleNavLink}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;

