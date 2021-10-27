import { useState, useEffect } from 'react';

const Timer = props => {

  const [time, setTime] = useState(10);
  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0)
        setTime(prev => prev - 1);
      else
        setTime(0);
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
