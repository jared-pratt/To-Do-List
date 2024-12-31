'use client';

import React from 'react';
import { useTasks } from '../../context/TaskProvider';
import TaskListItem from '../TaskListItem';

export default function TaskList() {
  const { tasks } = useTasks();

  if (tasks.length === 0) {
    return <p className="mt-6 text-gray-500">No tasks available. Add one!</p>;
  }

  return (
    <ul className="mt-6 space-y-4 border border-gray-300 p-4 rounded">
      {tasks.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
