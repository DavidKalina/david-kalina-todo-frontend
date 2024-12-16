"use client";

import { deleteTask, toggleTaskCompletion } from "@/app/actions/task";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface TaskProps {
  id: string;
  title: string;
  color: string;
  completed: boolean;
}

const Task = ({ id, title, color, completed }: TaskProps) => {
  const router = useRouter();
  const [isUpdating, setIsUpdating] = useState(false);

  async function handleToggleCompletion() {
    setIsUpdating(true);
    await toggleTaskCompletion(id, !completed);
    setIsUpdating(false);
  }

  async function handleDeleteTask() {
    await deleteTask(id);
  }

  return (
    <div
      className="group flex items-center gap-2 rounded-md border border-[#333] bg-[#262626] p-8 text-sm text-zinc-200"
      style={{ borderLeftColor: color, borderLeftWidth: "4px" }}
    >
      <button
        onClick={handleToggleCompletion}
        disabled={isUpdating}
        className={`flex h-5 w-5 items-center justify-center rounded-full border ${
          completed ? "bg-[#4ea8de] border-[#4ea8de]" : "border-[#4ea8de]"
        }`}
      >
        {completed && <div className="h-2.5 w-2.5 rounded-full bg-white" />}
      </button>

      <p
        onClick={() => router.push(`/tasks/${id}`)}
        className={`flex-1 truncate cursor-pointer hover:text-[#4ea8de] ${
          completed ? "line-through text-zinc-500" : ""
        }`}
      >
        {title}
      </p>

      <button
        className="opacity-0 transition-opacity group-hover:opacity-100"
        onClick={handleDeleteTask}
      >
        <Trash />
      </button>
    </div>
  );
};

export default Task;
