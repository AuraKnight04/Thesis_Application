import React , {useState} from 'react';

// after properly working on the tast list the tasks are made directly in the task list not in the task item
function TaskItem({task, toggleCompleted}) {
    const [isCompleted, setIsCompleted] = useState(false);

    function handleChange() {
        setIsCompleted(!isCompleted);
        toggleCompleted(task.id);
    }

    return (
        <div
            style={{
        textDecoration: isCompleted ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
      onClick={handleChange}
    >
      {task}
        </div>
    );
}

export default TaskItem;