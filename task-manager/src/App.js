import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
const App = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);
  const addTask = (taskName) => {
    fetch('http://localhost:5000/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: taskName })
    })
      .then((response) => response.json())
      .then((newTask) => setTasks([...tasks, newTask]));
  };
  const deleteTask = (taskId) => {
    fetch(`http://localhost:5000/api/tasks/${taskId}`, { method: 'DELETE' })
      .then(() => setTasks(tasks.filter((task) => task.id !== taskId)));
  };
  return (
    <div>
      <h1>Task Manager</h1>
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default App;