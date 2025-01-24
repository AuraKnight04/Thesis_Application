import React, { useState } from 'react';
import TaskItem from './TaskItem';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState('');
    const [point, setPoint] = useState(0);


    // https://react.dev/reference/react-dom/components/input
function addTask(text) {
 const newTask = {
 id: Date.now(),
 text,
 point: 10,
 completed: false
 };
 setTasks([...tasks, newTask]);
 setText('');
 }
 function deleteTask(id) {
    setTasks(tasks.map(task => {
        if (task.id === id) {
        return {...task, completed: !task.completed};
        } else {
        return task;
        } 
        }));
 }
 function toggleCompleted(id) {
    setTasks(tasks.map(task => {
        if (task.id === id) {
            if (!task.completed) {
                setPoint(point + task.point); // adds points to point tracker
            }
        return {...task, completed: !task.completed};
        } else {
        return task;
        } 
        }));
 }
 return (
 <div className='task-list'>
    {tasks.map((task) => (
        <TaskItem
        key={task.id}
        task={task}
        deleteTask={deleteTask}
        toggleCompleted = {toggleCompleted}
        />
    ))}
    <form>
        <input
        type = "text"
        value = {point}
        onChange = {e => setPoint(e.target.value)}
        placeholder="Task Name"
        />
        <button type = "submit" onClick={(e) => {
            e.preventDefault();
            addTask(text);
        }}>
        Add Task
        </button>
    </form>
 </div>
 );
}

export default TaskList;
