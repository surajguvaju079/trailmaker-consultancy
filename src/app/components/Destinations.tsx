export function Destinations() {
  {/* eslint-disable react/no-unescaped-entities */}
  return (
    <section id="destinations">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Where you could go</span>
          <h2>Destinations our students are studying in right now.</h2>
          <p>
            We only counsel toward universities we've placed students in before
            — so the advice is lived experience, not a brochure.
          </p>
        </div>
        <div className="dest-grid reveal">
          <div className="dest-card" style={{ "--c1": "#d6274f", "--c2": "#7a1230" }}>
            <span>Australia</span>
          </div>
          <div className="dest-card" style={{ "--c1": "#1d9fd8", "--c2": "#0d3f5c" }}>
            <span>United Kingdom</span>
          </div>
          <div className="dest-card" style={{ "--c1": "#33a95c", "--c2": "#12522a" }}>
            <span>Canada</span>
          </div>
          <div className="dest-card" style={{ "--c1": "#f2b807", "--c2": "#7a5c03" }}>
            <span>United States</span>
          </div>
          <div className="dest-card" style={{ "--c1": "#2a2560", "--c2": "#15112f" }}>
            <span>Japan</span>
          </div>
          <div className="dest-card" style={{ "--c1": "#34343d", "--c2": "#151519" }}>
            <span>South Korea</span>
          </div>
        </div>
      </div>
    </section>
  );
}