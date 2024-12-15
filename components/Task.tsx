import React from "react";

const Task = () => {
  return (
    <div className="group flex items-center gap-2 rounded-md border border-[#333] bg-[#262626] p-8 text-sm text-zinc-200">
      <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#4ea8de]">
        <div className="h-2.5 w-2.5 rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <p className="flex-1 truncate">
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames
        integer.
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
