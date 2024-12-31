'use client';

import React from 'react';
import { useTasks } from '@/app/context/TaskProvider';
import TaskListItem from '@/app/components/TaskListItem';

export default function TaskList() {
  const { tasks } = useTasks();

  if (tasks.length === 0) {
    return <p className="mt-6 text-gray-500">No tasks available. Add one!</p>;
  }

  return (
    <ul className="mt-6 space-y-4">
      {tasks.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
