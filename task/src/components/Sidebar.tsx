import { useState } from "react";
import { Link } from "react-router";
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

const dashboardItems = [
  { label: "Overview" },
  { label: "My Tasks", count: 6 },
  { label: "Activity" },
];

export default function Sidebar() {
  const [dashboardOpen, setDashboardOpen] = useState(true);
  const [active, setActive] = useState("My Tasks");

  return (
    <aside className="sidebar">
      <div className="logo">◍ Atlas</div>

      <div className="nav-group">
        <Link to="/dashboard" className="nav-item">
          Dashboard
        </Link>
        <Link to="/task" className="nav-item">
          Tasks
        </Link>
        <Link to="/user" className="nav-item">
          User
        </Link>
        <div
          className="nav-item"
          onClick={() => setDashboardOpen(!dashboardOpen)}
        >
          Dashboard <span>{dashboardOpen ? "⌃" : "⌄"}</span>
        </div>

        {dashboardOpen &&
          dashboardItems.map((item) => (
            <div
              key={item.label}
              className={`nav-sub ${active === item.label ? "active" : ""}`}
              onClick={() => setActive(item.label)}
            >
              {item.label}
              {item.count && <span className="count">{item.count}</span>}
            </div>
          ))}
      </div>

      {nav.map((n) => (
        <div key={n} className="nav-item">
          {n} <span>⌄</span>
        </div>
      ))}
    </aside>
  );
}
