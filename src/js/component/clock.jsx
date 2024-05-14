import React, { useState, useEffect } from 'react';

 function Clock() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCount((prevCount) => prevCount + 1);
        }, 1000);
    
        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, []); // Empty dependency array ensures this effect runs once on mount and not on updates
    
      return (
        <div className="mainContainer d-flex justify-content-center">
            <div className="clock icon">
                0         
            </div>
            <div className="clock number0">0</div>
            <div className="clock number1">0</div>
            <div className="clock number2">0</div>
            <div className="clock number3">0</div>
            <div className="clock number4">0</div>
            <div className="clock number5">{count}</div>
        </div>
    );
};

export default Clock