export type Status = "Complete" | "In Progress" | "To Do" | "Overdue";
export type Priority = "High" | "Medium" | "Low";
export interface Task {
  id: number;
  title: string;
  project: string;
  color: string;
  due: string;
  status: Status;
  priority: Priority;
}
