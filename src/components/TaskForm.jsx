import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const { dispatch } = useContext(TaskContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim() === '') return;
    dispatch({
      type: 'ADD_TASK',
      payload: {
        id: crypto.randomUUID(),
        title,
        completed: false,
      }
    });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        className="flex-1 p-2 border rounded dark:bg-gray-700 dark:text-white"
        placeholder="Nueva Pelicula"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Agregar
      </button>
    </form>
  );
};

export default TaskForm;
