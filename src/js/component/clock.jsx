import React, { useState, useEffect } from 'react';

function Clock() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 100);
    }

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(isRunning ? false : true)
    //setIsRunning(true);
  };

  const handleReset = () => {
    setCount(0);
    setIsRunning(false);
  };

  // Format the count to display six digits (HH:MM:SS)
  const formattedCount = String(count).padStart(6, '0');

  return (
    <div className="mainContainer d-flex justify-content-center">
      <div className="clock icon">0</div>
      {formattedCount.split('').map((digit, index) => (
        <div key={index} className={`clock number${index}`}>
          {digit}
        </div>
      ))}
      <button onClick={handleStart}>{isRunning ? 'Pause' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Clock;
