
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const connectDb = async () => {
  try {
    await prisma.$connect();
    console.log('Database connected');
  } catch (error) {
    console.error('Error connecting to the database', error);
  }
};

const disconnectDb = async () => {
  try {
    await prisma.$disconnect();
    console.log('Database disconnected');
  } catch (error) {
    console.error('Error disconnecting from the database', error);
  }
};
// await connectDb();

const createTodo = async (data) => {
  return await prisma.todo.create({
    data,
  });
}

const getTodos = async () => {
  return await prisma.todo.findMany();
}

const getTodoById = async (id) => {
  return await prisma.todo.findUnique({
    where: { id },
  });
}

const updateTodo = async (id, data) => {
  return await prisma.todo.update({
    where: { id },
    data,
  });
}

const deleteTodo = async (id) => {
  return await prisma.todo.delete({
    where: { id },
  });
}

module.exports = {
  connectDb,
  disconnectDb,
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
};