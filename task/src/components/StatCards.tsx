import type { Task } from "../types";

const items = [
  { label: "To Do", status: "To Do" },
  { label: "In Progress", status: "In Progress" },
  { label: "Completed", status: "Complete" },
  { label: "Overdue", status: "Overdue" },
] as const;

export default function StatCards({ tasks }: { tasks: Task[] }) {
  return (
    <div className="stats">
      {items.map((i) => (
        <div key={i.label} className="stat">
          <span>{i.label}</span>
          <b>{tasks.filter((t) => t.status === i.status).length}</b>
        </div>
      ))}
    </div>
  );
}
