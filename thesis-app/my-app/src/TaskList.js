import React, { useState } from 'react';
import TaskItem from './TaskItem';

function TaskList() {
    const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);
    const [text, setText] = useState('');
    const [point, setPoint] = useState(0);


    // https://react.dev/reference/react-dom/components/input
    // https://www.youtube.com/watch?v=9wiWzu_tRB0&list=WL&index=1&t=183s 
function addTask() {
        /*const text = {
          id: Date.now(),
          point: 10,
          completed: false
        };*/  
        if (text.trim() !== ""){
            setTasks(t =>[...t, text]);
            setText("");
        }
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

 function handleChange(event) {
    setText(event.target.value);
 }


 function moveTaskUp(id) {
     
 }

 function moveTaskDown(id) {
     
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
    <h1>Task List</h1>

    <div>
        <input 
        type = "text"
        placeholder='Enter a Task'
        value = {text}
        onChange = {handleChange}
        />
        <button
            className='add-task-button'
            onClick={addTask}>
            Add Task
        </button>
    </div>
    <ol>
        {tasks.map((task, id) => 
            <li key = {task.id}>
                <span className='task-name'>{task.text}</span>
                <button 
                    className='delete-task-button'
                    onClick={() => deleteTask(task.id)}>
                    Delete Task
                </button>
                <button 
                    className='move-button'
                    onClick={() => moveTaskUp(task.id)}>
                    👆
                </button>
                <button 
                    className='move-button'
                    onClick={() => moveTaskDown(task.id)}>
                    👇
                </button>
                <span className='taskPoints'>{"10 ⭐️"}</span>
            </li>
        )}   
    </ol>
 </div>
 );

{/*  {tasks.map((task) => (
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
 </div> */}
}

export default TaskList;
