import { useState } from 'react';

const Play = props => {
  const [clicks, setClicks] = useState(0);
  const [playing, setPlaying] = useState(false);
  const handleClick = () => {
    if (playing)
      setClicks(clicks + 1);
  };
  const countdown = () => {
    setPlaying(true);
    setClicks(0);
    setTimeout(() => {
      setPlaying(false);
    }, 10000);
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
