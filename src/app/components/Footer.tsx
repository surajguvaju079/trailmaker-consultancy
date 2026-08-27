export function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="brand">
              <svg
                width="34"
                height="34"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <path
                  d="M50 12 A40 40 0 0 1 50 92 A20 20 0 0 1 50 52 A20 20 0 0 0 50 12Z"
                  fill="#d6274f"
                />
                <path
                  d="M50 12 A40 40 0 0 1 90 52 A40 40 0 0 1 50 92 A20 20 0 0 0 50 52 A20 20 0 0 0 50 12Z"
                  fill="#33a95c"
                />
                <circle cx="50" cy="58" r="9" fill="#f2b807" />
                <path
                  d="M50 66 C42 66 34 74 32 84 C40 88 46 86 50 78 C54 86 60 88 68 84 C66 74 58 66 50 66Z"
                  fill="#1d9fd8"
                />
              </svg>
              <span className="t1">Trail<span className="t2">maker</span></span>
            </div>
            <p>
              Trailmaker Chadanichowk Educational Consultancy Pvt. Ltd. helps
              Nepali students plan, prepare, and depart for study abroad — with
              one advisor guiding the whole trail.
            </p>
            <div className="social">
              <a href="#" aria-label="Facebook"
                ><svg viewBox="0 0 24 24" fill="none" strokeWidth={2}>
                  <path
                    d="M14 9h3V6h-3a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h3l1-3h-4v-2a1 1 0 0 1 1-1Z"
                  /></svg
              ></a>
              <a href="#" aria-label="Instagram"
                ><svg viewBox="0 0 24 24" fill="none" strokeWidth={2}>
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" /></svg
              ></a>
              <a href="#" aria-label="YouTube"
                ><svg viewBox="0 0 24 24" fill="none" strokeWidth={2}>
                  <rect x="2" y="6" width="20" height="12" rx="3" />
                  <path d="m10 9 5 3-5 3V9Z" fill="#fff" stroke="none" /></svg
              ></a>
            </div>
          </div>
          <div className="foot-col">
            <h5>Explore</h5>
            <a href="#services">Services</a>
            <a href="#process">Your trail</a>
            <a href="#destinations">Destinations</a>
            <a href="#why">Why us</a>
          </div>
          <div className="foot-col">
            <h5>Destinations</h5>
            <a href="#destinations">Australia</a>
            <a href="#destinations">United Kingdom</a>
            <a href="#destinations">Canada</a>
            <a href="#destinations">Japan</a>
          </div>
          <div className="foot-col">
            <h5>Visit us</h5>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Chadanichowk+Nepal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chadanichowk, Nepal
            </a>
            <a href="tel:+9779800000000">+977 98-0000-0000</a>
            <a href="mailto:hello@trailmakerconsultancy.com"
              >hello@trailmakerconsultancy.com</a
            >
            <a
              href="https://www.google.com/maps/search/?api=1&query=travel+consultancy+Chadanichowk+Nepal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sun – Fri, 10am – 5pm
            </a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>
            © 2026 Trailmaker Chadanichowk Educational Consultancy Pvt. Ltd.
            All rights reserved.
          </span>
          <span>Designed to mark the trail, not just the destination.</span>
        </div>
      </div>
    </footer>
  );
}