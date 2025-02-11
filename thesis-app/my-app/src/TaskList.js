import React, { useState } from 'react';
import TaskItem from './TaskItem';
import App from "./App.js";

function TaskList({handleIncrement}) {
    // import the handle increment function from App.js so that in the Complete Task function it will also increment the point and task values
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
 function completeTask(index) {
    const  updatedTaskList = tasks.filter((element, i) => i !== index);
    setTasks(updatedTaskList);
    handleIncrement();
 }

 function handleChange(event) {
    setText(event.target.value);
 }


 function moveTaskUp(index) {
     if (index > 0) {
        const updatedTaskList = [...tasks];
        [updatedTaskList[index], updatedTaskList[index-1]] =
        [updatedTaskList[index - 1], updatedTaskList[index]];
        setTasks(updatedTaskList);
     }
 }

 function moveTaskDown(index) {
    if (index > tasks.length - 1) {
        const updatedTaskList = [...tasks];
        [updatedTaskList[index], updatedTaskList[index+1]] =
        [updatedTaskList[index + 1], updatedTaskList[index]];
        setTasks(updatedTaskList);
 }
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
        {tasks.map((task, index) => 
            <li key = {index}>
                <span className='task-name'>{task.text}</span>
                <button 
                    className='complete-task-button'
                    onClick={() => completeTask(index)}>
                    Complete Task
                </button>
                <button 
                    className='move-button'
                    onClick={() => moveTaskUp(index)}>
                    👆
                </button>
                <button 
                    className='move-button'
                    onClick={() => moveTaskDown(index)}>
                    👇
                </button>
                <span className='taskPoints'>{"10 ⭐️"}</span>
            </li>
        )}   
    </ol>
 </div>
 );
}
 
/*  {tasks.map((task) => (
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
 </div> */

export default TaskList;
