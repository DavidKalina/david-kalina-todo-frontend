import { Clipboard } from "lucide-react";
import { cn } from "@/lib/utils";

const EmptyTasks = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-[400px] space-y-4 text-center",
        className
      )}
    >
      <Clipboard className="w-16 h-16 text-gray-600 mb-4" strokeWidth={1} />
      <h2 className="text-2xl font-semibold text-gray-300">
        You don&apos;t have any tasks registered yet.
      </h2>
      <p className="text-gray-500 text-lg">Create tasks and organize your to-do items.</p>
    </div>
  );
};

export default EmptyTasks;
