import { cn } from "@/lib/utils";
import ClipboardIcon from "./ClipboardIcon";

const EmptyTasks = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-[400px] space-y-4 text-center",
        className
      )}
    >
      <ClipboardIcon />
      <p className="text-[16px] text-[#808080] font-[400] text-left flex flex-col gap-[2px]">
        <strong>You don&apos;t have any tasks registered yet.</strong>
        <br />
        Create tasks and organize your to-do items.
      </p>
    </div>
  );
};

export default EmptyTasks;
