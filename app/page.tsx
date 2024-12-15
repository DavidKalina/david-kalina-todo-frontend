import { IconButton } from "@/components/IconButton";
import TaskList from "@/components/TaskList";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/create-task">
        <IconButton
          iconPosition="trailing"
          text="Create Task"
          className="text-white bg-[#1E6F9F] rounded-[8px] text-xl p-6 w-full"
          icon="PlusCircle"
        />
      </Link>
      <TaskList />
    </>
  );
}
