// TaskFilter.js

import React from 'react';

function TaskFilter({ handleSortChange, handleFilterChange }) {
    
  return (
    <div className="task-filter">
        <div>
      <label>Sort By:</label>
      <select onChange={handleSortChange}>
        <option value="default">Default</option>
        <option value="creation">Creation Date</option>
        <option value="completion">Completion Status</option>
        <option value="alphabatically">Alphabatical Order</option>
        {/* Add more options for due date and priority */}
      </select>
      </div>

      <div>
      <label>Filter:</label>
      <select onChange={handleFilterChange}>
        <option value="all">All Tasks</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
        {/* Add more options for filtering by due date and priority */}
      </select>
      </div>
    </div>
  );
}

export default TaskFilter;
