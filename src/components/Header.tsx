"use client";

import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header>
      <nav className="nav">
        <a href="#top" className="brand">
          <svg width="42" height="42" viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="52" r="40" fill="none" />
            <path
              d="M50 12 A40 40 0 0 1 50 92 A20 20 0 0 1 50 52 A20 20 0 0 0 50 12Z"
              fill="#d6274f"
            />
            <path
              d="M50 12 A40 40 0 0 1 90 52 A40 40 0 0 1 50 92 A20 20 0 0 0 50 52 A20 20 0 0 0 50 12Z"
              fill="#33a95c"
            />
            <circle cx="50" cy="34" r="9" fill="#d6274f" />
            <circle cx="50" cy="34" r="9" fill="#33a95c" opacity="0" />
            <circle cx="50" cy="58" r="9" fill="#f2b807" />
            <circle cx="34" cy="30" r="6" fill="#d6274f" />
            <circle cx="66" cy="30" r="6" fill="#33a95c" />
            <path
              d="M50 66 C42 66 34 74 32 84 C40 88 46 86 50 78 C54 86 60 88 68 84 C66 74 58 66 50 66Z"
              fill="#1d9fd8"
            />
            <rect x="18" y="6" width="64" height="9" rx="2" fill="#2c2c33" />
            <path d="M50 -2 L92 12 L50 26 L8 12 Z" fill="#2c2c33" />
          </svg>
          <span className="brand-word">
            <span className="t1">Trail<span>maker</span></span>
            <span className="t2">Chadanichowk Consultancy</span>
          </span>
        </a>
        <div className="navlinks" id="navlinks">
          <a href="#services">Services</a>
          <a href="#process">Your Trail</a>
          <a href="#destinations">Destinations</a>
          <a href="#why">Why Us</a>
          <a href="#testimonials">Stories</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="navcta">
          <a
            href="#contact"
            className="btn btn-outline"
            style={{ padding: "11px 20px", fontSize: "13.5px" }}
          >
            Contact
          </a>
          <a
            href="#contact"
            className="btn btn-gold"
            style={{ padding: "11px 22px", fontSize: "13.5px" }}
          >
            Book Free Consultation
          </a>
          <button
            className="burger"
            id="burger"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}