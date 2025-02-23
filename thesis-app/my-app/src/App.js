import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import TaskList from './TaskList';
import PointTracker from './PointTracker';
import TaskCompletionTracker from './TaskCompletionTracker';

import './App.css';

export default function App() {
  const [pointValue, setPointCount] = useState(0);
  const [taskValue, setTaskValue] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupHeader = `Good job on completing  ${taskValue}  tasks!`;
  const popupContent = `Keep up the good work, you are on a roll!`;
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
    if ((taskValue + 1) % 5 === 0 || (pointValue + 10) % 5 === 0) {
      setIsPopupOpen(true);
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      const timer = setTimeout(() => {
        setIsPopupOpen(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isPopupOpen]);

  /**
   * Determines if happiness should be increased based on pointValue or taskValue.
   * @returns {boolean} True if either pointValue or taskValue is even, false otherwise.
   */
  const increaseHappiness = () => {
    // Check if  taskValue is even
    if (taskValue % 2 === 0) {
      return true;
    }
    else if (pointValue % 2 !== 0) {
      return false;
    }
  }


  return (
    <div className="App">
    <div>
      <h1 className = "title">Gamified Task List</h1>
      </div>
      <div className='container'>
      <TaskList handleIncrement={handleIncrement}/>
      <PointTracker pointValue={pointValue}/>
      <TaskCompletionTracker taskValue={taskValue} />
    </div>
    <div className='encouragement'>
           {isPopupOpen && (
            <Popup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} position="center">
              <h4>{popupHeader}</h4>
              <div>{popupContent}</div>
          </Popup>
           )}
        </div>
    </div>
  );
}

