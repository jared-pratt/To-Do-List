import './globals.css';
import { TaskProvider } from './context/TaskProvider';

export const metadata = {
  title: 'To-Do App',
  description: 'A simple Next.js to-do list',
};

export default function RootLayout({ tasks }) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>{tasks}</TaskProvider>
      </body>
    </html>
  );
}
