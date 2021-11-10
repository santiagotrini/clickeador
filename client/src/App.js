import { useState, useRef } from 'react';
// componentes
import Timer from './Timer';
import Play from './Play';
import Score from './Score';
import HiScores from './HiScores';

const App = () => {
  const [clicks, setClicks] = useState(0);
  // usar el hook useRef para obtener el valor correcto
  // de clicks en el setTimeout
  // ver https://github.com/facebook/react/issues/14010
  const clicksRef = useRef(clicks);
  clicksRef.current = clicks;

  const [score, setScore] = useState('');
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
      console.log(clicksRef.current); // debug
      setScore(clicksRef.current * 100);
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
      <Score score={score} />
      <HiScores />
    </div>
  );
}

export default App;
