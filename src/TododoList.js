import React, { useState } from 'react';
import styled from 'styled-components'; // Import styled from styled-components
import './App.css'; // Import the dark mode styles
import TodoItem from './TodoItem';

const TodoListContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;


const TodoListTitle = styled.h2`
  color: #333;
  text-align: center;
`;

const TodoForm = styled.form`
  display: flex;
  margin-top: 20px;

  input {
    flex-grow: 1;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 8px;
  }

  button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
  }
`;

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const removeTodo = (index) => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  };

  const toggleTodoCompleted = (index) => {
    setTodos([
      ...todos.slice(0, index),
      { ...todos[index], completed: !todos[index].completed },
      ...todos.slice(index + 1),
    ]);
  };

  return (
    <TodoListContainer>
      <TodoListTitle>To-Do List</TodoListTitle>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onRemove={() => removeTodo(index)}
            onToggleCompleted={() => toggleTodoCompleted(index)}
          />
        ))}
      </ul>
      <TodoForm onSubmit={(e) => {
        e.preventDefault();
        addTodo(e.target.elements.newTodo.value);
        e.target.elements.newTodo.value = "";
      }}>
        <input type="text" name="newTodo" placeholder="Add a new to-do" />
        <button type="submit">Add</button>
      </TodoForm>
    </TodoListContainer>
  );
}

export default TodoList;
