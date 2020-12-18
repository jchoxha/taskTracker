import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const NewTaskForm = () => {
  const { dispatch } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TASK', task: { title, description }});
    setTitle('');
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Task Name" value={title}
        onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Task Description (Optional)" value={description}
        onChange={(e) => setDescription(e.target.value)} />
      <input type="submit" value="Add Task" />
    </form>
  );
}
 
export default NewTaskForm;