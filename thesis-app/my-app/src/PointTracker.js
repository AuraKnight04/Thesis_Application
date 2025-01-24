import React , {useState} from 'react';

function PointTracker({point, setPoint}) {
    const[count, setCount] = useState(0);

    function addPoint() {
        setCount(count + 10);
        
    }
    return (
        <div>
            <h1>Point Tracker: {count}</h1>
            <button onClick={addPoint}>Add 10 points</button>
        </div>
    )
}