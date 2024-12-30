import React from "react";
import { useTasks } from "../context/TaskProvider";

export default function TaskListItem({ task }) {
  const { editTask, removeTask, toggleCompleteTask } = useTasks();

  const handleEdit = () => {
    const updatedTitle = prompt("Edit task title:", task.title);
    const updatedDescription = prompt("Edit task description:", task.description);
    editTask(task.id, updatedTitle, updatedDescription);
  };

  return (
    <li
      className={`p-4 border rounded ${
        task.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h2
            className={`text-lg font-semibold ${
              task.completed ? "line-through text-gray-500" : "text-gray-900"
            }`}
          >
            {task.title}
          </h2>
          <p
            className={`text-sm ${
              task.completed ? "line-through text-gray-400" : "text-gray-700"
            }`}
          >
            {task.description}
          </p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => toggleCompleteTask(task.id)}
            className={`px-3 py-1 text-sm rounded ${
              task.completed
                ? "bg-green-500 text-white"
                : "bg-yellow-500 text-white"
            }`}
          >
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button
            onClick={handleEdit}
            className="px-3 py-1 text-sm rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            Edit
          </button>
          <button
            onClick={() => removeTask(task.id)}
            className="px-3 py-1 text-sm rounded bg-red-500 text-white hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}
