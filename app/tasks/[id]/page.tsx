import { getTask } from "@/app/actions/task";
import NavToHomePage from "@/components/NavToHomePage";
import UpdateTaskForm from "@/forms/UpdateTaskForm";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function UpdateTaskPage({ params }: PageProps) {
  const task = await getTask(params.id);

  return (
    <div className="flex flex-col space-y-8">
      <NavToHomePage />
      <UpdateTaskForm task={task} />
    </div>
  );
}
