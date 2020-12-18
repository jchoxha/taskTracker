import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';
// import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="navbar">
      <h1>To Do</h1>
      <p>You have {tasks.length} tasks to complete...</p>
    </div>
  );
}
 
export default Navbar;