import React from 'react';
import { useState } from 'react';
import TaskList from './TaskList';
import PointTracker from './PointTracker';
import TaskCompletionTracker from './TaskCompletionTracker';
import Popup from 'reactjs-popup';
import './App.css';

function App() {
  const [pointValue, setPointCount] = useState(0);
  const [taskValue, setTaskValue] = useState(0);

  /* const Encouragement = () => {
    console.log('Condition:', (pointValue % 5 === 0) || (taskValue % 5 === 0));
    return (
    <Popup trigger = {pointValue % 5 ===0 || taskValue % 5 === 0} position= "center">
      <div>Good job on completing {taskValue} tasks!</div>
      </Popup>
  )
};
      */

  const handleIncrement = () => {
    console.log('Task value:', taskValue);
    console.log('Points:', pointValue);
    setPointCount(pointValue + 10);
    setTaskValue(taskValue + 1);
  };

  return (
    <div className="App">
    <div>
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
