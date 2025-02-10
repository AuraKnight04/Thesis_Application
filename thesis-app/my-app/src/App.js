import React from 'react';
import { useState } from 'react';
import TaskList from './TaskList';
import PointTracker from './PointTracker';
import TaskCompletionTracker from './TaskCompletionTracker';
import './App.css';

function App() {
  const [pointValue, setPointCount] = useState(0);
  const [taskValue, setTaskValue] = useState(0);

  const handleIncrement = () => {
    console.log('Task value:', taskValue);
    console.log('Points:', pointValue);
    setPointCount(pointValue + 10);
    setTaskValue(taskValue + 1);
  };

  return (
    <div className="App">"
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
