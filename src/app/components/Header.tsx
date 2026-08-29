"use client";

import { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    // Close menu on outside click
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.target.closest("header")) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    // Close menu on Escape key
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header>
      <nav className="nav">
        <a href="#top" className="brand">
          <img
            src="/logo.jpeg"
            alt="Trailmaker logo"
            width={126}
            height={42}
            style={{ display: "block" }}
          />
        </a>
        <div className="navlinks" id="navlinks">
          <a href="#services">Services</a>
          <a href="#process">Your Trail</a>
          <a href="#destinations">Destinations</a>
          <a href="#why">Why Us</a>
          <a href="#faq">FAQ</a>

        </div>
        <div className="navcta">
          <a
            href="#consultation"
            className="btn btn-outline"
            style={{ padding: "11px 20px", fontSize: "13.5px" }}
          >
            Contact
          </a>
          <a
            href="#consultation"
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
            aria-expanded={isMenuOpen}
            aria-controls="navlinks"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div
          className="mobile-menu"
          role="menu"
          aria-modal="true"
          onClick={closeMenu}
        >
          <button
            type="button"
            className="mobile-menu-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
          <a href="#top" className="mobile-menu-item">
            Home
          </a>
          <a href="#services" className="mobile-menu-item">
            Services
          </a>
          <a href="#destinations" className="mobile-menu-item">
            Destinations
          </a>
          <a href="#process" className="mobile-menu-item">
            Your Trail
          </a>
          <a href="#why" className="mobile-menu-item">
            Why Us
          </a>
          <a href="#faq" className="mobile-menu-item">
            FAQ
          </a>
          <a href="#consultation" className="mobile-menu-item">
            Book a Consultation
          </a>
          <span className="mobile-menu-divider" />
          <a href="#contact" className="mobile-menu-item">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
