import React from 'react';

function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => toggleComplete(task)}>Mark as {task.completed ? 'Incomplete' : 'Complete'}</button>
      <button onClick={() => deleteTask(task)}>Delete</button>
    </div>
  );
}

export default TaskItem;
