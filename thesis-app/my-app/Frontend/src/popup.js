import React from 'react';
import Popup from 'reactjs-popup';
import App from './App';
import './index.css';

 function popupIncentive(increaseHappiness,taskValue) {
    return (
        <div className='encouragement'>
                <Popup trigger = {increaseHappiness()} position= "center">
                    <h4> You have completed {taskValue} tasks</h4>
                    <div>Keep up the good work, you are on a roll!</div>
            </Popup>
        </div>
    )
};

export  default popupIncentive;