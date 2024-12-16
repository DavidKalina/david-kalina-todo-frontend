"use client";

import { deleteTask, toggleTaskCompletion } from "@/app/actions/task";
import { useRouter } from "next/navigation";
import { useState } from "react";
import TrashIcon from "./TrashIcon";
import CompletedIcon from "./CompletedIcon";
import InCompleteIcon from "./InCompleteIcon";
import { cn } from "@/lib/utils";
import DeleteTaskModal from "./DeleteTaskModal";

interface TaskProps {
  id: string;
  title: string;
  color: string;
  completed: boolean;
}

const Task = ({ id, title, color, completed }: TaskProps) => {
  const router = useRouter();
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleToggleCompletion() {
    setIsUpdating(true);
    await toggleTaskCompletion(id, !completed);
    setIsUpdating(false);
  }

  async function handleDeleteTask() {
    await deleteTask(id);
  }

  return (
    <>
      <div
        className="group flex items-start gap-[12px] rounded-[8px] border border-[#333] bg-[#262626] p-[16px] text-sm text-zinc-200"
        style={{ borderLeftColor: color, borderLeftWidth: "4px" }}
      >
        <button
          onClick={handleToggleCompletion}
          disabled={isUpdating}
          className="flex-shrink-0 flex items-center"
        >
          {completed ? <CompletedIcon /> : <InCompleteIcon />}
        </button>

        <div
          onClick={() => router.push(`/tasks/${id}`)}
          className={cn(
            `flex-1 flex leading-none cursor-pointer text-[#F2F2F2] hover:text-[#4ea8de]`,
            {
              "line-through text-[#808080]": completed,
            }
          )}
        >
          {title}
        </div>

        <button
          className="md:opacity-0 transition-opacity md:group-hover:opacity-100 flex-shrink-0 flex items-center"
          onClick={() => setIsDeleting(true)}
        >
          <TrashIcon />
        </button>
      </div>
      <DeleteTaskModal
        isOpen={isDeleting}
        onClose={() => setIsDeleting(false)}
        onConfirm={handleDeleteTask}
      />
    </>
  );
};

export default Task;
