import type { Task } from "../types";

const cls = (s: string) => s.toLowerCase().replace(" ", "-");

export default function TaskTable({ tasks }: { tasks: Task[] }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Task Title</th>
          <th>Project</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Priority</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {tasks.map((t) => (
          <tr key={t.id}>
            <td>{t.title}</td>
            <td>
              <span className="dot" style={{ background: t.color }}>
                {t.project[0]}
              </span>
              {t.project}
            </td>
            <td>{t.due}</td>
            <td>
              <span className={`badge ${cls(t.status)}`}>● {t.status}</span>
            </td>
            <td>
              <span className={`pill ${cls(t.priority)}`}>{t.priority}</span>
            </td>
            <td className="more">⋮</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
