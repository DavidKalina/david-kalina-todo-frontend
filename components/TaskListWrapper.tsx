import { getTasks } from "@/lib/tasks";
import { TaskListContent } from "./TaskListContent";

export default async function TaskListWrapper() {
  const { tasks, summary } = await getTasks();

  return <TaskListContent initialTasks={tasks} initialSummary={summary} />;
}
