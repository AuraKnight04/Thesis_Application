import React, { useState } from 'react';
import TaskItem from './TaskItem';
import App from "./App.js";

function TaskList({handleIncrement}) {
    // import the handle increment function from App.js so that in the Complete Task function it will also increment the point and task values
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');
    const [point, setPoint] = useState(0);


    // https://react.dev/reference/react-dom/components/input
    // https://www.youtube.com/watch?v=9wiWzu_tRB0&list=WL&index=1&t=183s 
function addTask() {
        /*const text = {
          id: Date.now(),
          point: 10,
          completed: false
        };*/  
        
        if (taskText.trim() !== ""){  
            setTasks(t =>[...t, taskText]);
            setTaskText("");
        }
        console.log("taskname: ",taskText);
      }
 function completeTask(index) {
    const  updatedTaskList = tasks.filter((element, i) => i !== index);
    setTasks(updatedTaskList);
    handleIncrement();
 }

 function handleChange(event) {
    setTaskText(event.target.value);
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
    if (index < tasks.length - 1) {
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
        value = {taskText}
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
                <span className='task-name'>{task}</span>
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
                <span className='task-points'>{"10 ⭐️"}</span>
            </li>
        )}   
    </ol>
 </div>
 );
}
 

export default TaskList;
