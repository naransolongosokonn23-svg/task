import { useMemo, useState } from "react";
import { tasks } from "../data/tasks";
import StatCards from "../components/StatCards";
import TaskTable from "../components/TaskTable";

export default function User() {
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
    </section>
  );
}
