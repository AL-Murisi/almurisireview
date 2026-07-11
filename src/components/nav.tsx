import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "/public/logo.png";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="nav-container" dir="rtl">
      <div className="logo-background">
        <img src={logo} width="100" height="100" alt="Logo" />
      </div>

      {/* Hamburger Button for Mobile */}
      <button 
        className="menu-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* The nav-links will get the 'open' class when isOpen is true */}
      <nav>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>التقييمات</Link>
          </li>
          <li>
            <Link to="/branches" onClick={() => setIsOpen(false)}>إضافة فرع</Link>
          </li>
          <li>
            <Link to="/employee" onClick={() => setIsOpen(false)}>الموظفون</Link>
          </li>
          <li>
            <Link to="/governorates" onClick={() => setIsOpen(false)}>إضافة محافظة</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}