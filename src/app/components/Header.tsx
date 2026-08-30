"use client";

import { useState, useEffect, useRef } from "react";

const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#destinations", label: "Destinations" },
  { href: "#process", label: "Your Trail" },
  { href: "#why", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const closeMenu = () => setIsMenuOpen(false);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Body scroll lock
  useEffect(() => {
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <header>
      <nav className="nav">
        <a href="#top" className="brand" onClick={closeMenu}>
          <img
            src="/logo.jpeg"
            alt="Trailmaker logo"
            width={126}
            height={42}
            style={{ display: "block" }}
          />
        </a>

        <div className="navlinks" id="navlinks">
          {LINKS.slice(1).map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="navcta">
          <a href="#consultation" className="btn btn-outline">
            Contact
          </a>
          <a href="#consultation" className="btn btn-gold">
            Book Free Consultation
          </a>
          <button
            className={`burger${isMenuOpen ? " active" : ""}`}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobileMenu"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div
        id="mobileMenu"
        ref={menuRef}
        className={`mobile-menu${isMenuOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        aria-hidden={!isMenuOpen}
      >
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-menu-item"
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}

        <span className="mobile-menu-divider" />

        <div className="mobile-menu-cta">
          <a
            href="#consultation"
            className="btn btn-outline btn-block"
            onClick={closeMenu}
          >
            Contact
          </a>
          <a
            href="#consultation"
            className="btn btn-gold btn-block"
            onClick={closeMenu}
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
