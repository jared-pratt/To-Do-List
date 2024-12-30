// import { NextResponse } from 'next/server';
// import prisma from '@/lib/prisma';

// // Fetch all todos
// export async function GET() {
//   const tasks = await prisma.task.findMany();
//   return NextResponse.json(tasks);
// }

// // Create a new todo
// export async function POST(req) {
//   const { title, description } = await req.json();
//   const newTask = await prisma.task.create({ data: { title, description } });

//   return NextResponse.json(newTask);
// }
import { useEffect } from "react";
import { useTasks } from "../context/TaskProvider";

export default function App() {
  const { tasks, setTasks } = useTasks();

  useEffect(() => {
    async function fetchTasks() {
      const response = await fetch("/api/todos");
      const data = await response.json();
      setTasks(data);
    }
    fetchTasks();
  }, []);

  return <TaskList />;
}
