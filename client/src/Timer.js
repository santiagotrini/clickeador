import { useState, useEffect } from 'react';

const Timer = props => {

  const [time, setTime] = useState(60);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="Timer">
      <h1>{time}</h1>
    </div>
  );
};

export default Timer;
