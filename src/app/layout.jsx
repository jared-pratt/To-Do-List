import './globals.css';
import { TaskProvider } from './context/TaskProvider';

export const metadata = {
  title: 'My To-Do App',
  description: 'A simple Next.js to-do list',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* The entire app is wrapped in TaskProvider */}
        <TaskProvider>{children}</TaskProvider>
      </body>
    </html>
  );
}
