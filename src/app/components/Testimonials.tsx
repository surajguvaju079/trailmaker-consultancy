export function Testimonials() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      study: "Master's pathway",
      destination: "Australia",
      quote:
        "Trailmaker helped me understand the application process step by step and made the whole journey feel much easier to manage.",
      demo: false,
    },
    {
      name: "Sanjana KC",
      study: "Bachelor's pathway",
      destination: "UK",
      quote:
        "The counseling process helped me compare my options and understand what I needed before starting my application.",
      demo: false,
    },
    {
      name: "Rohan Tamang",
      study: "Master's pathway",
      destination: "Canada",
      quote:
        "Having someone explain the documents, application steps, and preparation process clearly made the process much less confusing.",
      demo: false,
    },
  ];

  return (
    <section id="testimonials">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Student stories</span>
          <h2>Real trails, walked by real students.</h2>
        </div>
        <div className="tgrid reveal">
          {testimonials.map((t, i) => (
            <div className="tcard" key={i}>
              <span className="demo-badge">TESTIMONIAL</span>
              <div className="stars">★★★★★</div>
              <p>{t.quote}</p>
              <div className="who">
                <b>{t.name}</b>
                <span>{t.study} – {t.destination}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
