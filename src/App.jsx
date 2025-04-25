import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <TaskProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-4">
          <div className="max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">Gestor</h1>
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </TaskProvider>
    </ThemeProvider>
  );
};

export default App;
