import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma'; 

export async function GET(request, { params }) {
  const { id } = params; 
  try {
    const task = await prisma.task.findUnique({ where: { id } });
    if (!task) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  const { id } = params;
  try {
    const data = await request.json(); 
    const updatedTask = await prisma.task.update({
      where: { id },
      data, 
    });
    return NextResponse.json(updatedTask);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    const deletedTask = await prisma.task.delete({ where: { id } });
    return NextResponse.json(deletedTask);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
