const nav = [
  "Projects",
  "Tasks",
  "Calendar",
  "Analytics",
  "Team",
  "Files",
  "Integrations",
  "Settings",
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">◍ Atlas</div>
      <div className="nav-group">
        <div className="nav-item">Dashboard ⌃</div>
        <div className="nav-sub">Overview</div>
        <div className="nav-sub active">
          My Tasks <span className="count">6</span>
        </div>
        <div className="nav-sub">Activity</div>
      </div>
      {nav.map((n) => (
        <div key={n} className="nav-item">
          {n} <span>⌄</span>
        </div>
      ))}
    </aside>
  );
}
