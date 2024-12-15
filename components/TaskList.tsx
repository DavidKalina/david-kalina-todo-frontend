import React from "react";
// import Task from "./Task";
import { TextWithBadge } from "./TextWithBadge";
import EmptyTasks from "./EmptyTasks";

const TaskList = () => {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <TextWithBadge text="Tasks" count={5} />
        <TextWithBadge text="Completed" count={3} />
      </div>
      <EmptyTasks />
      {/* <div className="max-h-[600px] overflow-y-auto space-y-6">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div> */}
    </div>
  );
};

export default TaskList;
