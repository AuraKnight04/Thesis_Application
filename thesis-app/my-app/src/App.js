import React from 'react';
import { useState } from 'react';
import TaskList from './TaskList';
import PointTracker from './PointTracker';
import TaskCompletionTracker from './TaskCompletionTracker';
import Popup from 'reactjs-Popup';
import './App.css';

function App() {
  const [pointValue, setPointCount] = useState(0);
  const [taskValue, setTaskValue] = useState(0);

  const encouragement = () => {
    <Popup trigger = {pointValue == (pointValue + 5) || taskValue == (taskValue + 5)} position= "center">
      <div>Good job on completing {taskvlaue} tasks!</div>
      </Popup>
  };

  const handleIncrement = () => {
    console.log('Task value:', taskValue);
    console.log('Points:', pointValue);
    setPointCount(pointValue + 10);
    setTaskValue(taskValue + 1);
  };

  if 


  return (
    <div className="App">"
    <div>
      <encouragement>
      <h1 className = "title">Gamified Task List</h1>
      </div>
      <div className='container'>
      <TaskList />
      
      <PointTracker pointValue={pointValue}/>
      <TaskCompletionTracker taskValue={taskValue} />
      <button onClick={handleIncrement}>Task Completed</button>
      
      </div>
    </div>
  );
}

export default App;
