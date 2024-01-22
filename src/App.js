import React, { useState } from 'react';
import './App.css'; // assumes styles.css file is in the same directory as App.js
import Task from './Task';


function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(''); // Define state for input field value

  const addTask = () => {
    // Update tasks array with new object
    setTasks([...tasks, { text: task, completed: false }]);
    // Clear input field after adding task
    setTask('');
  };

  const markCompleted = (index) => {
    const updatedTasks = [...tasks]; // Create a copy of the tasks array
    updatedTasks[index].completed = !updatedTasks[index].completed; // Toggle completion status
    setTasks(updatedTasks); // Update state with modified tasks array
  };

  return (
    <div className="App">
      <h1>My Tokenized To-Do List</h1>
      <input
        type="text"
        placeholder="Add a task"
        value={task} // Set input field value from state
        onChange={(e) => setTask(e.target.value)} // Update state on input change
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} task={task} onMarkCompleted={() => markCompleted(index)} />
        ))}
      </ul>
    </div>
  );
}

export default App;
