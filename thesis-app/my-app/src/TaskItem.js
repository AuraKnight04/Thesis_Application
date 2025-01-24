import React , {useState} from 'react';


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