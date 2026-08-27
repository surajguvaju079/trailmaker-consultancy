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
          <img
            src="/logo.jpeg"
            alt="Trailmaker logo"
            width={42}
            height={42}
            style={{ display: "block" }}
          />
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