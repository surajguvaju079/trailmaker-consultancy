const STATS = [
  { title: "Personalized", body: "Guidance" },
  { title: "Multiple", body: "Destinations" },
  { title: "Step-by-step", body: "Application support" },
  { title: "Beyond", body: "Visa assistance" },
];

export function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="wrap stats-inner">
        {STATS.map((s, i) => (
          <div key={i} className="stat-block">
            <b>{s.title}</b>
            <span>{s.body}</span>
          </div>
        ))}
      </div>
    </div>
  );
}