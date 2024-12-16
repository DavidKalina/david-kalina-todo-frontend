"use client";

import { TextWithBadge } from "./TextWithBadge";
import EmptyTasks from "./EmptyTasks";
import Task from "./Task";
import { useEffect, useRef, useState } from "react";

type TaskListContentProps = {
  initialTasks: Array<{
    id: string;
    title: string;
    color: string;
    completed: boolean;
  }>;
  initialSummary: {
    total: number;
    completed: number;
  };
};

export function TaskListContent({ initialTasks, initialSummary }: TaskListContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("400px");

  useEffect(() => {
    const updateMaxHeight = () => {
      if (!containerRef.current) return;

      const vh = window.innerHeight;
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const bottomSpacing = 144;
      const calculatedHeight = vh - containerTop - bottomSpacing;

      const minHeight = 200;
      const finalHeight = Math.max(calculatedHeight, minHeight);

      setMaxHeight(`${finalHeight}px`);
    };

    updateMaxHeight();
    window.addEventListener("resize", updateMaxHeight);

    return () => window.removeEventListener("resize", updateMaxHeight);
  }, []);

  if (initialTasks.length === 0) {
    return <EmptyTasks />;
  }

  return (
    <div ref={containerRef} className="flex flex-col h-full">
      <div className="flex justify-between mb-4">
        <TextWithBadge
          className="text-[#4EA8DE] font-[700]"
          text="Tasks"
          count={initialSummary.total}
        />
        <TextWithBadge
          className="text-[#8284FA] font-[700]"
          text="Completed"
          total={initialSummary.total}
          count={initialSummary.completed}
        />
      </div>
      <div
        style={{ maxHeight }}
        className="overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"
      >
        <div className="space-y-6 pb-4">
          {initialTasks.map((task) => (
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
    </div>
  );
}
