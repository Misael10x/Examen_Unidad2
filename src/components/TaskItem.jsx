import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext);

  return (
    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-2xl bg-white shadow-md dark:bg-gray-900 dark:border-gray-700 transition-all hover:shadow-lg">
      <span className={`flex-1 text-lg font-medium ${task.completed ? 'line-through text-gray-400' : 'text-gray-800 dark:text-white'}`}>
        {task.title}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
          className="text-green-600 hover:text-white hover:bg-green-600 p-1 rounded transition"
        >
          ✔
        </button>
        <button
          onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}
          className="text-red-600 hover:text-white hover:bg-red-600 p-1 rounded transition"
        >
          ✖
        </button>
        <button
          onClick={() => dispatch({ type: 'EDIT_TASK', payload: task.id })}
          className="text-yellow-600 hover:text-white hover:bg-yellow-600 p-1 rounded transition"
        >
          ✎
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
