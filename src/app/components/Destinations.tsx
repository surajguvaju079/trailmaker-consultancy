export function Destinations() {
  /* eslint-disable react/no-unescaped-entities */

  // Photos: all sourced from Unsplash, released under the Unsplash License
  // (free for commercial use, no attribution required — unsplash.com/license).
  // Credited here anyway as good practice.
  const destinations = [
    {
      name: "Australia",
      c1: "#d6274f",
      c2: "#7a1230",
      img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=70&auto=format&fit=crop",
      credit: "Photoholgic",
    },
    {
      name: "United Kingdom",
      c1: "#1d9fd8",
      c2: "#0d3f5c",
      img: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&q=70&auto=format&fit=crop",
      credit: "Charles Postiaux",
    },
    {
      name: "Canada",
      c1: "#33a95c",
      c2: "#12522a",
      img: "https://images.unsplash.com/photo-1544381165-2307ff808e0e?w=800&q=70&auto=format&fit=crop",
      credit: "Davi Costa",
    },
    {
      name: "United States",
      c1: "#f2b807",
      c2: "#7a5c03",
      img: "https://images.unsplash.com/photo-1542396817-804fa5be8ecf?w=800&q=70&auto=format&fit=crop",
      credit: "Joe Montanari",
    },
    {
      name: "Japan",
      c1: "#2a2560",
      c2: "#15112f",
      img: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&q=70&auto=format&fit=crop",
      credit: "David Edelstein",
    },
    {
      name: "South Korea",
      c1: "#34343d",
      c2: "#151519",
      img: "https://images.unsplash.com/photo-1566800890932-e89159daf3dc?w=800&q=70&auto=format&fit=crop",
      credit: "Adish (AJ)",
    },
  ];

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
          {destinations.map((d) => (
            <div
              key={d.name}
              className="dest-card"
              style={{ "--c1": d.c1, "--c2": d.c2 } as React.CSSProperties}
            >
              <img src={d.img} alt={d.name} loading="lazy" />
              <span>{d.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
