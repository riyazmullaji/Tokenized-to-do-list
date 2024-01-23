// TodoList.js
import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TaskTitle = styled.span`
  flex-grow: 1;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
`;

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <Container>
      <h2>My To-Do List</h2>
      <TaskList>
        {tasks.map((task, index) => (
          <TaskItem key={index}>
            <TaskTitle completed={task.completed}>{task.title}</TaskTitle>
            <Button onClick={() => deleteTask(index)}>Delete</Button>
            <Button onClick={() => completeTask(index)}>
              {task.completed ? 'Undo' : 'Complete'}
            </Button>
          </TaskItem>
        ))}
      </TaskList>
      <input
        type="text"
        placeholder="Add a new task"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTask({ title: e.target.value, completed: false });
            e.target.value = '';
          }
        }}
      />
    </Container>
  );
};

export default TodoList;
