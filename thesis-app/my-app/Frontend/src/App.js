import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import TaskList from './TaskList';
import PointTracker from './PointTracker';
import TaskCompletionTracker from './TaskCompletionTracker';
import Login from './Login';
import 'reactjs-popup/dist/index.css';
import './index.css';
import './App.css';

export default function App() {
  const [pointValue, setPointCount] = useState(0);
  const [taskValue, setTaskValue] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupHeader = `Good job on completing  ${taskValue}  tasks!`;
  const popupContent = `Keep up the good work, you are on a roll!`;


  const handleIncrement = () => {
    console.log('Task value:', taskValue);
    console.log('Points:', pointValue);
    setPointCount(pointValue + 10);
    setTaskValue(taskValue + 1);
    increaseHappiness();
  };

  useEffect(() => {
    if (isPopupOpen) {
      const timer = setTimeout(() => {
        setIsPopupOpen(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [isPopupOpen]);

  /**
   * Determines if happiness should be increased based on pointValue or taskValue.
   * @returns {boolean} True if taskValue is even
   */
  const increaseHappiness = () => {
    // Check if  taskValue is even
    if ((taskValue + 1) % 2 === 0) {
       setIsPopupOpen(true);
       //this is for testing purposes
       console.log('increasehappiness');
    }
  }


  return (
    <div className="App">
      <Login/>
    <div>
      <h1 className = "title">Gamified Task List</h1>
      </div>
      <div className='container'>
      <TaskList handleIncrement={handleIncrement}/>
      <PointTracker pointValue={pointValue}/>
      <TaskCompletionTracker taskValue={taskValue} />
    </div>
           {isPopupOpen && (
            <Popup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} 
            position="center">
              <div className="encouragement-popup">
              <h4>{popupHeader}</h4>
              <div>{popupContent}</div>
              </div>
          </Popup>
           )}
    </div>
  );
}


