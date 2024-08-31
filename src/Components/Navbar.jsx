import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/public/tropical-smoothies-high-resolution-logo-black-transparent.svg";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo-black" />
      </div>
      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        <li className="nav-item">
          <NavLink to="/" aria-label="Home page">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/faq" aria-label="Frequently Asked Questions">
            FAQ
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/pricing" aria-label="View pricing plans">
            Pricing
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" aria-label="Contact Us">
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
