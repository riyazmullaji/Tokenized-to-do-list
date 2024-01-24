import React, { useState } from 'react';
import TodoItem from './TodoItem'; // Ensure TodoItem is imported correctly

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
    <div className="todo-list">
      <h2>To-Do List</h2>
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
      {/* Ensure closing </ul> tag is present */}
      <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(e.target.elements.newTodo.value);
        e.target.elements.newTodo.value = "";
      }}>
        <input type="text" name="newTodo" placeholder="Add a new to-do" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TodoList;
