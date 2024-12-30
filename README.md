# To-Do List Application
A simple, responsive to-do list application built with React, Tailwind CSS, and Prisma, using CockroachDB for data storage.

---

## Features
- Add new tasks with title and description.
- Mark tasks as complete/incomplete.
- Edit task details.
- Delete tasks.
- Persistent storage with CockroachDB.

---

## Running the Application Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo-url.git
   cd your-repo-name

Install Dependencies: Ensure Node.js and npm are installed. Run:

```bash
npm install
```

Set Environment Variables: Create a .env file in the root of the project:

DATABASE_URL=your_cockroachdb_url
SITE_URL=http://localhost:3000

Run the Application:

```bash
npm run dev
```

Visit the app at http://localhost:3000.

## Deploying the Application
Set Up Environment Variables:

Ensure the production .env file includes the correct DATABASE_URL pointing to your CockroachDB instance.
Build the Application:

```bash
npm run build
```

Deploy to a Hosting Provider:

Vercel: Connect your GitHub repository, set environment variables, and deploy.
Netlify or Railway: Follow the platform's deployment instructions.

Run the Server: Deploy the app with the command:

```bash
npm start
```

Setting Up the Database Schema
Install Prisma CLI:

```bash
npm install prisma --save-dev
```

Configure Prisma:

Initialize Prisma in the project:
```bash
npx prisma init
```

Update the schema.prisma file with the following:

```bash
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Task {
  id          String   @id @default(uuid())
  title       String
  description String?
  completed   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  deletedAt   DateTime?
}
```

Run Database Migrations:

Create the migration:

```bash
npx prisma migrate dev --name init
```

Prisma will create the necessary tasks table in your database.

Verify Database Connection:

Use 
```bash 
npx prisma studio
```
 to view the database schema and data.

Testing Database Functionality
Add a sample task using the app or API.

Verify its presence using Prisma Studio or CoackroachDB SQL queries:

```bash
SELECT * FROM tasks;
```

API Endpoints
GET /api/tasks

Fetch all tasks.

Response:

[
  {
    "id": "uuid",
    "title": "Sample Task",
    "description": "Description here",
    "completed": false,
    "createdAt": "timestamp",
    "updatedAt": "timestamp",
    "deletedAt": null
  }
]

POST /api/tasks
Create a new task.

Request Body:

{
  "title": "New Task",
  "description": "Task description here"
}

Response:

{
  "id": "uuid",
  "title": "New Task",
  "description": "Task description here",
  "completed": false,
  "createdAt": "timestamp",
  "updatedAt": "timestamp",
  "deletedAt": null
}

PATCH /api/tasks/:id
Update a task (mark complete, edit title/description).

Request Body:

{
  "title": "Updated Title",
  "description": "Updated Description",
  "completed": true
}

DELETE /api/tasks/:id
Delete a task.
