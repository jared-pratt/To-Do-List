import React from "react";
import { useTasks } from "../context/TaskProvider";
import TaskListItem from "./TaskListItem";

export default function TaskList() {
  const { tasks } = useTasks();

  return (
    <ul className="mt-6 space-y-4">
      {tasks.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
