import { createContext, useReducer, useEffect } from 'react';
import { taskReducer } from '../reducers/taskReducer';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
