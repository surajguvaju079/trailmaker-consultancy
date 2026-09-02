export function LocationMap() {
  return (
    <section id="location" style={{ background: "var(--cream)" }}>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Visit us</span>
          <h2>Trailmaker Edu Consultancy Banepa</h2>
          <p>
            Banepa, Tindobato -8, next to Sanima Bank. Drop by for a free counseling
            session — we will walk you through the trail from the first visit.
          </p>
        </div>
        <div className="loc-wrap reveal">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.7990649166613!2d85.51683207458919!3d27.630739176226456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb0f88ec6e144b%3A0x1007d4906a6abf57!2sTrailmaker%20Edu%20Consultancy%20Banepa!5e0!3m2!1sen!2snp!4v1787830152478!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0, borderRadius: "18px", width: "100%", aspectRatio: "16/9" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Trailmaker Edu Consultancy Banepa location"
          ></iframe>
        </div>
        <div className="loc-actions reveal">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Banepa+Chandanichowk+Kavre+Nepal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            Get Directions
          </a>
          <a href="tel:+97711664371" className="btn btn-outline">
            Call 011-664371
          </a>
          <a href="mailto:info@trailmakerchadanichowk.com.np" className="btn btn-outline">
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
