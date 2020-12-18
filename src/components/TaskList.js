import React, { useContext } from 'react';
import TaskDetails from './TaskDetails';
import { TaskContext } from '../contexts/TaskContext';

// const randomBackgroundColor = () => {
//   const colorNumber = Math.floor(Math.random() * Math.floor(6));

//   var color = 'red';
//   switch (colorNumber) {
//     case 0:
//       color = "blue";
//       break;
//     case 1:
//       color = "red";
//       break;
//     case 2:
//        color = "green";
//       break;
//     case 3:
//       color = "yellow";
//       break;
//     case 4:
//       color = "purple";
//       break;
//     case 5:
//       color = "orange";
//       break;
//     case 6:
//       color = "pink";
//   }

//   return color;
// }

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  return tasks.length ? (
    <div className="task-list" 
    // style={{ backgroundColor: randomBackgroundColor()}}
    >
      <ul>
        {tasks.map(task => {
          return ( <TaskDetails task={task} key={task.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No tasks remaining</div>
  );
}

export default TaskList;