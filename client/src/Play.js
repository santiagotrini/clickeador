import { useState } from 'react';

const Play = props => {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  const countdown = () => {
    setInterval(() => {
      props.setTime(props.time - 1);
    }, 1000);
  };
  return (
    <div className="Play">
      <div
        className="PlayArea"
        onClick={handleClick}
      />
      <button onClick={countdown}>Jugar</button>
      <h2>Clicks: {clicks}</h2>
    </div>
  );
};

export default Play;
