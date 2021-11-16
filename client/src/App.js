import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
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

  const [scores, setScores] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:4000/api/scores';
    axios.get(url)
      .then(res => {
        console.log('Llendo a buscar datos al backend...');
        console.log(res.data);
        setScores(res.data);
      })
      .catch(err => console.log(err));
  }, []);


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
      const player = prompt('Ingrese su nombre');
      const datos = {
        score: clicksRef.current * 100,
        player: player
      };
      const url = 'http://localhost:4000/api/scores';
      axios.post(url, datos)
        .then(res => {
          setScores([res.data, ...scores]);
        })
        .catch(err => console.log(err));
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
      <HiScores scores={scores} />
    </div>
  );
}

export default App;
