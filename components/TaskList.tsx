import { TextWithBadge } from "./TextWithBadge";
import EmptyTasks from "./EmptyTasks";
import Task from "./Task";
import { getTasks } from "@/lib/tasks";

export default async function TaskList() {
  const { tasks, summary } = await getTasks();

  if (tasks.length === 0) {
    return <EmptyTasks />;
  }

  return (
    <div>
      <div className="flex justify-between mb-4">
        <TextWithBadge className="text-[#4EA8DE] font-[700]" text="Tasks" count={summary.total} />
        <TextWithBadge
          className="text-[#8284FA] font-[700]"
          text="Completed"
          total={summary.total}
          count={summary.completed}
        />
      </div>
      <div className="max-h-[600px] overflow-y-auto space-y-6">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            color={task.color}
            completed={task.completed}
          />
        ))}
      </div>
    </div>
  );
}
