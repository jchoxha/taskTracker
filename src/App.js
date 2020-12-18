import React from 'react';
import Navbar from './components/Navbar';
import TaskContextProvider from './contexts/TaskContext';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';

// import ThemeContextProvider from './contexts/ThemeContext'
// import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      {/* <ThemeContextProvider> */}
        <TaskContextProvider>
          <Navbar />
          <TaskList />
          <NewTaskForm />
        </TaskContextProvider>
        {/* <ThemeToggle /> */}
      {/* </ThemeContextProvider> */}
      
    </div>
  );
}

export default App;
