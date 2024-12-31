'use client';

import React, { useState } from 'react';
// Same folder for context => `./context/TaskProvider`
import { useTasks } from './context/TaskProvider';
// `./components/TaskList` (since `page.jsx` is in `app/`)
import TaskList from './components/TaskList';

export default function Home() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center text-white-600 mb-6">
        The World's Greatest To-Do List
      </h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

function TaskInput() {
  const { addTask } = useTasks();
  const [newTask, setNewTask] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleAddTask = () => {
    addTask(newTask, newTaskDescription);
    setNewTask('');
    setNewTaskDescription('');
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Task Title"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        placeholder="Task Description"
        value={newTaskDescription}
        onChange={(e) => setNewTaskDescription(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleAddTask}
        className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition"
      >
        Add Task
      </button>
    </div>
  );
}
