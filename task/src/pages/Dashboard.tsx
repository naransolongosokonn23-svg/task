import { useMemo, useState } from "react";
import { tasks } from "../data/tasks";
import StatCards from "../components/StatCards";
import TaskTable from "../components/TaskTable";

export default function Dashboard() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("All");

  const visible = useMemo(
    () =>
      tasks.filter(
        (t) =>
          (status === "All" || t.status === status) &&
          (t.title + t.project).toLowerCase().includes(q.toLowerCase()),
      ),
    [q, status],
  );

  return (
    <section className="page">
      <div className="page-head">
        <h1>My Tasks</h1>
        <button className="btn-primary">+ Create New Task</button>
      </div>
      <div className="filters">
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          {["All", "To Do", "In Progress", "Complete", "Overdue"].map((s) => (
            <option key={s} value={s}>
              {s === "All" ? "All Status" : s}
            </option>
          ))}
        </select>
        <input
          placeholder="Search task / project"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      <StatCards tasks={tasks} />
      <TaskTable tasks={visible} />
      <footer className="pager">
        <span>‹</span>
        <b>1</b>
        <span>2</span>
        <span>›</span>
        <em>Total {tasks.length} Data</em>
      </footer>
    </section>
  );
}
