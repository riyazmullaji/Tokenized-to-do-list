function Task({ task, onMarkCompleted }) {
    return (
      <li className={task.completed ? 'completed' : ''}>
        {task.text}
        <button onClick={onMarkCompleted}>
          {task.completed ? 'Undo' : 'Mark Complete'}
        </button>
      </li>
    );
  }
  
  export default Task;
  