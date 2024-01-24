import React from 'react';

const TodoItem = ({ todo, onRemove, onToggleCompleted }) => {
    const { text, completed } = todo;
  
    return (
      <li className={`todo-item ${completed && 'completed'}`}>
        <div className="todo-text">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggleCompleted()}
          />
          <span>{text}</span>
        </div>
        <button onClick={onRemove}>Remove</button>
      </li>
    );
  };
  
  export default TodoItem;
  