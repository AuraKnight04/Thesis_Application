import React  from 'react';

export default function TaskCompletionTracker({taskValue}) {
   /* const[initialTaskValue, setTaskValue] = useState(0);
     function addTaskValue() {
        setTaskValue(initialTaskValue + 1);
    }
        <button className='task-increment-button'
                 onClick={addTaskValue}>Add 1</button>*/

    return (
        <div className='Task-Completion-tracker'>
            <h1>Task Completion Tracker</h1>
            <h1 className='tasks'>Tasks: {taskValue}</h1>
        </div>
    )
}
