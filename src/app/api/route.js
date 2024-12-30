import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Fetch all todos
export async function GET() {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}

// Create a new todo
export async function POST(req) {
  const { title, description } = await req.json();
  const newTask = await prisma.task.create({ data: { title, description } });

  return NextResponse.json(newTask);
}