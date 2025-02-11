import React , {useState} from 'react';

function PointTracker({pointValue}) {
  /*  const[count, setCount] = useState(0);
    function addPoint() {
        setCount(count + 10);
    }*/


    return (
        <div className='point-tracker'>
            <h1>Point Tracker</h1>
            <h1 className='points'>Points: ⭐️ {pointValue}</h1>
        </div>
    )
}

export default PointTracker;
