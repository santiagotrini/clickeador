import { useState } from 'react';
// componentes
import Timer from './Timer';
import Play from './Play';
import Score from './Score';
import HiScores from './HiScores';

const App = () => {
  const [clicks, setClicks] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(10);
  const tick = () => {
    setTime(prev => prev - 1);
  };
  const startTimer = () => {
    setTime(10);
    setClicks(0);
    setPlaying(true);
    const interval = setInterval(() => {
      tick();
    }, 1000);
    setTimeout(() => {
      setPlaying(false);
      clearInterval(interval);
    }, 10000);
  };

  return (
    <div className="App">
      <div className="Top">
        <Timer time={time} />
        <Play
          clicks={clicks}
          setClicks={setClicks}
          startTimer={startTimer}
          playing={playing}
        />
      </div>
      <Score />
      <HiScores />
    </div>
  );
}

export default App;
