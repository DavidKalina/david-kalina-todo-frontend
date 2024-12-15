"use client";

import { toggleTaskCompletion } from "@/app/actions/task";
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

      <button className="opacity-0 transition-opacity group-hover:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 text-zinc-500 hover:text-zinc-400"
        >
          <path d="M3 6h18" />
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
      </button>
    </div>
  );
};

export default Task;
