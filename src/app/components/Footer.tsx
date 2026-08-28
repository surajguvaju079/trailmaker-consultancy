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
              Trailmaker Consultancy helps Nepali students plan, prepare, and depart
              for study abroad — with one advisor guiding the whole trail.
            </p>
            <div className="social">
              <a
                href="https://www.facebook.com/people/Trailmaker-Chadanichowk-educational-consultancy-Banepa/100065606254468/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2}>
                  <path d="M14 9h3V6h-3a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h3l1-3h-4v-2a1 1 0 0 1 1-1Z" />
                </svg>
              </a>
              <a
                href="mailto:banepatrailmaker@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2}>
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </a>
              <a
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.7990649166613!2d85.51683207458919!3d27.630739176226456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb0f88ec6e144b%3A0x1007d4906a6abf57!2sTrailmaker%20Edu%20Consultancy%20Banepa!5e0!3m2!1sen!2snp!4v1787830152478!5m2!1sen!2snp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2}>
                  <rect x="2" y="6" width="20" height="12" rx="3" />
                  <path d="m10 9 5 3-5 3V9Z" fill="#fff" stroke="none" />
                </svg>
              </a>
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
              href="https://www.google.com/maps/search/?api=1&query=Banepa+Chandanichowk+Kavre+Nepal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Banepa, Chandanichowk, Kavre, Nepal
            </a>
            <a href="tel:+97711664371">011-664371</a>
            <a href="tel:+97711665623">011-665623</a>
            <a href="mailto:banepatrailmaker@gmail.com">banepatrailmaker@gmail.com</a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=travel+consultancy+Banepa+Chandanichowk+Kavre+Nepal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>
            © 2026 Trailmaker Consultancy. All rights reserved.
          </span>
          <span>Designed to mark the trail, not just the destination.</span>
        </div>
      </div>
    </footer>
  );
}