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
  const lastScrollYRef = useRef(0);
  const isNavbarHiddenRef = useRef(false);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const closeMenu = () => setIsMenuOpen(false);

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

  // Scroll handler for hiding/showing navbar (not the logo bar)
  useEffect(() => {
    const handler = () => {
      const currentScrollY = window.pageYOffset;

      if (currentScrollY > lastScrollYRef.current && !isMenuOpen) {
        // Scrolling down - hide navbar
        isNavbarHiddenRef.current = true;
      } else if (currentScrollY < lastScrollYRef.current && !isMenuOpen) {
        // Scrolling up - show navbar
        isNavbarHiddenRef.current = false;
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [isMenuOpen]);

  return (
    <header>
      {/* Fixed logo bar - always visible, never hides on scroll */}
      <div className="logo-bar" style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "#fff",
        padding: "10px 0",
        borderBottom: "1px solid #e0e0e0",
        zIndex: 1000,
        transition: "padding 0.3s ease",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center'


      }}>
        <img
          src="/logo.jpeg"
          alt="Trailmaker logo"
          style={{
            display: "block",
            margin: "0 auto",
            height: "30px",
            objectFit: "contain",
            width: "120px",
          }}
        />
        <div style={{

        }}>
          Trailmaker Educational Consultancy</div>

      </div>

      <nav className="nav" style={{
        marginTop: "50px",
        transition: "margin-top 0.3s ease"
      }}>
        <a href="#top" className="brand" onClick={closeMenu}>

          <img
            src="/icon.png"
            alt="Trailmaker icon"
            className="nav-logo"
            style={{
              width: "28px",
              height: "28px",
              objectFit: "contain",
            }}
          />
        </a>

        <div className="navlinks" id="navlinks">
          {LINKS.map((link) => (
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
