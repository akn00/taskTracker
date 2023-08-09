import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import LocalStorage from './LocalStorage';
import TaskFilter from './TaskFilter';

function App() {
  
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = LocalStorage.getTasks();
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now() };
    setTasks([...tasks, newTask]);
    LocalStorage.saveTasks([...tasks, newTask]);
  };

  const toggleComplete = (task) => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
    LocalStorage.saveTasks(updatedTasks);
  };

  const deleteTask = (task) => {
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(updatedTasks);
    LocalStorage.saveTasks(updatedTasks);
  };

  const [sortOption, setSortOption] = useState('default');
const [filterOption, setFilterOption] = useState('all');

const filteredTasks = tasks.filter((task) => {
  if (filterOption === 'completed') {
    return task.completed;
  } else if (filterOption === 'incomplete') {
    return !task.completed;
  } else {
    return true; // Show all tasks for 'all' filter option
  }
});

const sortedTasks = [...filteredTasks].sort((a, b) => {
  // console.log(sortOption);
  // if (sortOption === 'creation') {
  //   return a.id - b.id; // Sort by creation date (using id as an approximation)
  // } else if (sortOption === 'completion') {
  //   return a.completed - b.completed || a.id - b.id; // Sort by completion status and then by creation date
  // } else if (sortOption === 'alphabatically') {
  //   // const titleA = 
  //   // const titleB = 
  //   return a.title.toLowerCase()-b.title.toLowerCase();
  // } else {
  //   return b.id - a.id; // Default sorting
  // }
  switch(sortOption){
    case 'creation':
      return a.id - b.id; // Sort by creation date (using id as an approximation)
    case 'completion':
      return a.completed - b.completed || a.id - b.id; // Sort by completion status and then by creation date
    case 'alphabatically':
      return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1;
    default:
      return b.id - a.id; // Default sorting
  }
});

return (
  <div className="app">
    <h1>Task Tracker</h1>
    <TaskForm addTask={addTask} />
    <TaskFilter
      handleSortChange={(e) => setSortOption(e.target.value)}
      handleFilterChange={(e) => setFilterOption(e.target.value)}
    />
    <TaskList
      tasks={sortedTasks} // Use the sorted and filtered tasks here
      toggleComplete={toggleComplete}
      deleteTask={deleteTask}
    />
  </div>
);
}

export default App;
