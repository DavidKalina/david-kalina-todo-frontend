import { getTask } from "@/app/actions/task";
import UpdateTaskForm from "@/forms/UpdateTaskForm";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function UpdateTaskPage({ params }: PageProps) {
  const task = await getTask(params.id);

  return <UpdateTaskForm task={task} />;
}
